import { createStore } from 'redux';

// trata ação do usuário
// function reducer (store = {}, action) {
//   // tratar as ações
//   switch (action.type) {
//     // dominio/ação
//     // bolinhos/assar

//     //ação em uppercase
//     // ASSAR_BOLINHOS
//     case 'assar-bolinhos':
//       return {
//         sabor: action.sabor,
//         status: 'assando'
//       };

//     // bolinhos/pronto
//     // BOLINHO_PRONTO
//     case 'bolinho-pronto':
//       return {
//         ...store,
//         status: 'pronto'
//       };

//     // sempre retorna próximo estado da store
//     default:
//       return store;
//   }
// }

const stateInicial = {
  lista: [],
  tweetSelecionado: ''
};

function tweetsReducer (store = stateInicial, action) {
  switch (action.type) {
    case 'tweets/atualizaLista':
      return {
        ...store,
        lista: action.listaDeTweets
      };

    default:
      return store;
  }
}

const store = createStore(tweetsReducer);

// window.store = store;

export default store;
