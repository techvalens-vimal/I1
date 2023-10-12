import React from "react";
import "./Modal.css";

const Modal = (props) => {
  return (
    props.show && (
      <div className="modalParent" onClick={props.close}>
        <div className="modalChild">
          <div>
            <h1>Post ID : {props.post.id}</h1>
            <h2>TITLE : {props.post.title}</h2>
            <p>BODY : {props.post.body}</p>
          </div>
          <div className="close">
            <button
              className="backBtn"
              onClick={() => {
                props.close();
              }}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
