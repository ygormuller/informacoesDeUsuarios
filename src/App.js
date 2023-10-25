import React from "react";
import UserList from "./components/UserList";
import UserInfo from "./components/UserInfo";

const App = () => {
  return (
    <><div>
      <UserList />
    </div><div>
        <UserInfo />
      </div></>
  );
};
export default App;
