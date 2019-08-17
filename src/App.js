import React, { Fragment } from 'react';

import Cabecalho from './components/Cabecalho';
import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
      <Cabecalho>
        <NavBar
          links={['mensagens', 'notificações', 'coisas loucas']}
        />
      </Cabecalho>
    </Fragment>
  );
}

export default App;
