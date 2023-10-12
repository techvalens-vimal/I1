import React from "react";
import Clock from "../clock/Clock";
import "./Details.css";
import Post from "./Post";

const Details = (props) => {
  return (
    <React.Fragment>
      <div className="profile">
        <div className="div2">
          <button className="backBtn" onClick={props.back}>BACK</button>
          <Clock />
        </div>
        <h3>Profile Page</h3>
        <div>
          <h1>{props.user.name}</h1>
        </div>
        <div className="parent">
          <div className="segment">
            <p className="left">USERNAME : {props.user.username}</p>
            <p className="left">
              ADDRESS : {props.user.address.street} {props.user.address.city}
            </p>
          </div>
          <div className="segment">
            <p className="left">PHONE : {props.user.phone}</p>
            <p className="left">EMAIL : {props.user.email}</p>
          </div>
        </div>
        <div className="postContainer">
          {props.posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Details;
