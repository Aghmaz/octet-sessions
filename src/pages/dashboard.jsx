import React from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { userId } = useParams();
  return <div>i am dashboard user Id {userId}</div>;
};

export default Dashboard;
