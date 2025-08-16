import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function RecipeReviewCard({
  avatarName,
  header,
  dateofJoining,
  detail,
  upliftData,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [text, setText] = useState("");
  const handleChangeForText = (e) => {
    let value = e.target.value.trim();
    setText(value);
  };
  const handleUpliftingStat = () => {
    upliftData(text);
  };
  return (
    <>
      <input type="text" onChange={handleChangeForText} />

      <button onClick={handleUpliftingStat}> + </button>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {avatarName}
            </Avatar>
          }
          title={header}
          subheader={dateofJoining}
        />
        <FavoriteIcon />
        <CardMedia
          component="img"
          height="194"
          image="https://picsum.photos/200/300"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {detail}
          </Typography>
        </CardContent>
        <CardActions disableSpacing></CardActions>
      </Card>
    </>
  );
}
