import React from "react";
import ReactDOM from 'react-dom';
import "./Modal.css";

const Modal = ({ open, children, onClose, image, name, description, type }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
    <div className="modal-background" />
      <div id="modal">
        <img className="modal-image" src={image}/>
        <div className="modal-info">
          <h4 className="modal-item-name">{name}</h4>
          <h5 className="modal-item-description">{description}</h5>
          <h5 className="modal-item-type">{type}</h5>
        </div>
        <div className="link-box">
          <h5 className="modal-details">Details</h5>
          <h5 className="modal-close" onClick={onClose}>Close</h5>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;