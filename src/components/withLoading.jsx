import React from "react";

export default function WithLoading(WrappedComponent) {
  // in another words we can say it as UserList component
  return function EnhancedComponent({ isLoading, ...props }) {
    // props = users array that we were passing in the HOC
    // we were passing these props on HOC component
    if (isLoading) {
      return (
        <div>
          <h1> Loading...</h1>{" "}
        </div>
      );
    }
    return <WrappedComponent {...props} />;
  };
}
