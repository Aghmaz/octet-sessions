import React from "react";
import UserList from "./components/UserList";
import WithLoading from "./components/withLoading";

// usage
// we are passing userList component as an props to withLoading component
const UserListWithLoading = WithLoading(UserList);
export default function Hoc() {
  const users = ["haseeb", "shahzaib", "huzaifa", "bismah"];
  const isLoading = false;
  return (
    <>
      <center>
        <h1>Higher order component</h1>
      </center>
      {/* passing props to userListwithloading that is HOC */}
      <UserListWithLoading isLoading={isLoading} users={users} />
    </>
  );
}
