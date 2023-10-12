import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

const Home = () => {
  const users = useSelector((state) => {
    return state.posts.users;
  });
  return (
    <React.Fragment>
      <h1>User Directory</h1>
      <div>
        {users.map((user) => {
          return <User key={user.id} user={user}></User>;
        })}
      </div>
      <div></div>
    </React.Fragment>
  );
};

export default Home;
