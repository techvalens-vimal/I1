import React, { useState } from "react";
import Details from "../details/Details";
import { useSelector } from "react-redux";
import "./User.css";

const User = (props) => {
  const user = props.user;
  const [showDetails, setShowDetails] = useState(false);
  const posts = useSelector((state) => {
    return state.posts.posts;
  });
  const userPosts = posts.filter((post) => {
    return post.userId == user.id;
  });
  const btnClickHandler = () => {
    setShowDetails(!showDetails);
  };
  const backButtonHandler = () => {
    setShowDetails(false);
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="userBtn" onClick={btnClickHandler}>
          <span>Name : {user.name}</span>
          <span>Posts : {userPosts.length}</span>
        </button>
      </div>
      {showDetails && (
        <Details posts={userPosts} user={user} back={backButtonHandler} />
      )}
    </React.Fragment>
  );
};

export default User;
