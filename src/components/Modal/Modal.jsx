import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div onClick={closeModal} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        <div className="upper-section">
          <h1>Huge Announcement</h1>
          <p onClick={closeModal} className="close">
            &times;
          </p>
        </div>
        <div className="middle-section">
          <h3>💻 I am open for ... 👨‍🏫</h3>
          <p>If you like to talk about tech, then lets connect...</p>
        </div>
        <div className="lower-section">
          <a onClick={closeModal} className="modal-btn btn-red">
            Close
          </a>
          <a
            href="https://www.linkedin.com/in/sani2608/"
            target="_blank"
            rel="noreferrer"
            className="modal-btn btn-green"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
