import React, { Component, Fragment } from 'react';

import Cabecalho from './../components/Cabecalho'
import NavMenu from './../components/NavMenu'
import Dashboard from './../components/Dashboard'
import Widget from './../components/Widget'
import TrendsArea from './../components/TrendsArea'
import Tweet from './../components/Tweet'

// import { NotificacaoContext } from './../contexts/notificacao';
import * as TweetsService from '../services/tweets';

class Home extends Component {
  // constructor(props) {
  //   super(props);

  //   this.handleCriaTweet = this.handleCriaTweet.bind(this);
  // }

  state = {
    novoTweet: '',
    listaTweets: []
  }

  handleCriaTweet = (evento) => {
  // handleCriaTweet(evento) {
    evento.preventDefault();

    const token = localStorage.getItem('token');

    TweetsService.criaTweet({
      token,
      conteudo: this.state.novoTweet
    }).then((tweetCriado) => {
      // atualizar state com objeto de tweet
      // adaptação da renderização de tweets
      this.setState({
        novoTweet: '',
        listaTweets: [tweetCriado, ...this.state.listaTweets]
      });
    }).catch(console.log);
  }

  novoTweetEstaValido() {
    const novoTweetLength = this.state.novoTweet.length;

    return novoTweetLength > 0 && novoTweetLength <= 140;
  }

  // novoTweetEstaValido(novoTweet) {
  //   const novoTweetLength = novoTweet.length;

  //   return novoTweetLength > 0 && novoTweetLength <= 140;
  // }

  render() {
    // destructuring
    const { novoTweet, listaTweets } = this.state;
    // const [primeiroTweet, segundoTweet] = listaTweets;

    // const novoTweet = this.state.novoTweet;
    // const listaTweets = this.state.listaTweets;

    return (
      <Fragment>
        <Cabecalho>
          <NavMenu usuario="@omariosouto" />
        </Cabecalho>
        <div className="container">
          <Dashboard>
            <Widget>
              <form className="novoTweet" onSubmit={this.handleCriaTweet}>
                <div className="novoTweet__editorArea">
                  <span className={`novoTweet__status ${this.novoTweetEstaValido() ? '' : 'novoTweet__status--invalido'}`} >
                    {novoTweet.length}/140
                  </span>
                  <textarea
                    className="novoTweet__editor"
                    placeholder="O que está acontecendo?"
                    onChange={(evento) => {
                      // console.log(evento.target.value);
                      this.setState({
                        novoTweet: evento.target.value,
                        // isValid: novoTweetEstaValido(evento.target.value)
                      });
                    }}
                    value={novoTweet}
                  />
                </div>
                <button
                  type="submit"
                  className="novoTweet__envia"
                  disabled={!this.novoTweetEstaValido()}
                >
                  Tweetar
                </button>
              </form>
            </Widget>
            <Widget>
              <TrendsArea />
            </Widget>
          </Dashboard>
          <Dashboard posicao="centro">
            <Widget>
              <div className="tweetsArea">
                {/* truthy */}
                {!listaTweets.length && (
                  <p>Twite alguma coisa! Vamos arranjar treta!</p>
                )}
                {/* adaptação da renderização de tweets */}
                {listaTweets.map((tweet, index) => (
                  <Tweet
                    key={tweet._id}
                    nomeUsuario={`${tweet.usuario.nome} ${tweet.usuario.sobrenome}`}
                    userName={tweet.usuario.login}
                    totalLikes={tweet.totalLikes}
                    avatarUrl={tweet.usuario.foto}
                  >
                    {tweet.conteudo}
                  </Tweet>
                ))}
              </div>
            </Widget>
          </Dashboard>
        </div>
      </Fragment>
    );
  }
}

export default Home;
