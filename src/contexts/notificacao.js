import React, { Component, createContext } from 'react';

export const NotificacaoContext = createContext({
  mensagem: '',
  setMensagem() {}
});

export class NotificacaoProvider extends Component {
  state = {
    mensagem: ''
  }

  render () {
    return (
      <NotificacaoContext.Provider
        value={{
          mensagem: this.state.mensagem,
          setMensagem: (novaMensagem) => this.setState({ mensagem: novaMensagem })
        }}
      >
        {this.props.children}
        {this.state.mensagem && (
          <div className="notificacaoMsg">
            {this.state.mensagem}
          </div>
        )}
      </NotificacaoContext.Provider> 
    );
  }
}
