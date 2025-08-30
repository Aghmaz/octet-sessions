import React from "react";
import UserList from "./components/UserList";
import WithLoading from "./components/withLoading";

// usage
// we are passing userList component as an props to withLoading component
const UserListWithLoading = WithLoading(UserList);
export default function Hoc() {
  const users = ["haseeb", "shahzaib", "huzaifa", "bismah"];
  const isLoading = false;

  //   we are going to learn HOF - high order function

  function withLogging(fn) {
    return function (...args) {
      console.log(args, "argument");
      const result = fn(...args); // add => 3,4
      console.log(result, "result");
      return result;
    };
  }
  function add(a, b) {
    return a + b;
  }
  const loggedAdd = withLogging(add);
  loggedAdd(3, 4);
  loggedAdd(30, 14);
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
