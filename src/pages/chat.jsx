import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import RecipeReviewCard from "../Card";
import { useSelector } from "react-redux";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const chat = () => {
  const counter = useSelector((state) => state.counter.value);
  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("how many times , i am calling");
    fetchData();
  }, []);
  const increment = () => {
    setCount(count + 1);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let detail = `This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.`;
  let details = "i am haseeb";
  const [myParent, setMyParent] = useState("");
  const handleParentChange = (text) => {
    console.log("here is your text", text);
    setMyParent(text);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <h2>counter :{counter}</h2>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="user" {...a11yProps(0)} />
          <Tab label="jokes" {...a11yProps(1)} />
          <Tab label="props" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h1>Here is Your child state data: {myParent}</h1>
        <RecipeReviewCard
          avatarName="A"
          header="aghmaz asad sani"
          dateofJoining="September 14, 2025"
          detail={detail}
          upliftData={handleParentChange}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <RecipeReviewCard
          avatarName="B"
          header="Haseeb"
          dateofJoining="September 14, 2020"
          detail={details}
        />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <RecipeReviewCard
          avatarName="S"
          header="Shahzaib"
          dateofJoining="September 14, 2016"
          detail="i am shahzaib"
        />
      </CustomTabPanel>
    </Box>
  );
};

export default chat;
