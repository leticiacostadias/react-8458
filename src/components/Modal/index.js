import React, { Component } from 'react';
import Widget from '../Widget';

import './modal.css';

class Modal extends Component {
  handleCloseModal = (event) => {
    const { onClose } = this.props;
    const clicouNoConteudo = event.target.closest('.modal__conteudo');

    if (!clicouNoConteudo) {
      onClose();
    }
  }

  render () {
    const { isOpen, children } = this.props;

    return (
      <div
        className={`modal ${isOpen ? 'modal--active' : ''}`}
        onClick={this.handleCloseModal}
      >
        <div className="modal__conteudo">
          <Widget>
            {isOpen && children}
          </Widget>
        </div>
      </div>
    );
  }
}

export default Modal;
