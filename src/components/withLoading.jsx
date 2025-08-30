import React from "react";

export default function WithLoading(WrappedComponent) {
  return function EnhancedComponent({ isLoading, ...props }) {
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
