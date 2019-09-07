import * as TweetsService from '../services/tweets';

export function listaTweets () {
  return dispatch => TweetsService
    .listaTweets()
    .then((listaDeTweets) => {
      dispatch({
        type: 'tweets/atualizaLista',
        listaDeTweets
      });
    });
}

export function criaTweet (conteudo) {
  return dispatch => TweetsService
    .criaTweet(conteudo)
    .then((tweetCriado) => {
      dispatch({
        type: 'tweets/novoTweet',
        tweetCriado
      });
    });
}

export function deletaTweet (tweetId) {
  return dispatch => TweetsService
    .deleteTweet({ tweetId })
    .then(() => {
      dispatch({
        type: 'tweets/apaga',
        tweetId
      });
    })
}
