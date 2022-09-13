import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUserRequest } from "./actions/userActionTypes";
import UsersList from "./components/UsersList";

const App = ({ users, getUserRequest }) => {
  console.log(users);

  useEffect(() => {
    getUserRequest();
  }, [getUserRequest]);
  return (
    <div>
      <h1>Fetching the data using saga middleware</h1>
      <UsersList users={users.items} />
    </div>
  );
};

export default connect(({ users }) => ({ users }), { getUserRequest })(App);
