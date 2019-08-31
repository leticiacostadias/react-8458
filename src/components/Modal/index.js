import React, { Component } from 'react';
import Widget from '../Widget';

import './modal.css';

class Modal extends Component {
  render () {
    return (
      <div className="modal">
        <div className="modal__conteudo">
          <Widget>
            <h1>yay</h1>
          </Widget>
        </div>
      </div>
    );
  }
}

export default Modal;
