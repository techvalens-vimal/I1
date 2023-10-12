import React, { useState } from "react";
import "./Post.css";
import Modal from "../modal/Modal";

const Post = (props) => {
  const [showModal, setShowModal] = useState(false);
  const postClickHandler = (e)=>{
    e.stopPropagation()
    setShowModal(true)
  }
  const closeModalHandler = ()=>{
    setShowModal(false)
  }
  return (
    <>
      <div className="card" onClick={postClickHandler}>
        <div>
          <p>Post ID : {props.post.id}</p>
          <p>TITLE : {props.post.title}</p>
        </div>
        <div>
          <p>BODY : {props.post.body}</p>
        </div>
      </div>
      {showModal && <Modal post={props.post} close={closeModalHandler} show={showModal}/>}
    </>
  );
};

export default Post;
