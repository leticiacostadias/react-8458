import React from 'react';

import './cabecalho.css';

class Cabecalho extends React.Component {
  render() {
    console.log(this.props.children)

    return (
      <header className="Cabecalho">
        <h1>Twitelum</h1>

        {this.props.children}
      </header>
    );
  }
}

export default Cabecalho;
