import React, { Fragment, useState } from "react";

import NewUserForm from "./Component/Users/NewUserForm";
import UserList from "./Component/Users/UserList";

const App = () => {
  // props uplifting function
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <Fragment>
      <NewUserForm onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
};
export default App;
