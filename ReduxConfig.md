# Configurando o Redux

## Instalações
- redux

## 1 - Criar a store

```js
import { createStore } from 'redux';

const store = createStore();
```

## 2 - Criar um reducer

```js
function reducer (state, action) {
  if (action.type === 'MEU_TYPE') {
    return 'mudança de state';
  }

  return state;
}
```