import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/user");
  };
  return (
    <div>
      i am dashboard user Id {userId}
      <button onClick={handleClick}>user's screen</button>
    </div>
  );
};

export default Dashboard;
