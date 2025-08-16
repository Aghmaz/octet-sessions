import React from "react";

const Child = ({ label, onClick, childState }) => {
  console.log("child rendered");
  return (
    <div>
      {childState}
      <button onClick={onClick}>{label}</button>
    </div>
  );
};

export default React.memo(Child);
