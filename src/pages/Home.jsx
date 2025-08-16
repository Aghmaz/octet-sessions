import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./home.css";
const Home = () => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <>
      <Card>
        <CardHeader title={""} subheader={""} />
        <FavoriteIcon />
        <CardMedia
          component="img"
          height="194"
          image="https://picsum.photos/200/300"
          alt="Paella dish"
        />
        <CardContent sx={{ color: "yellow" }} disableSpacing>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, id
            soluta inventore in magni laudantium itaque quia vel ipsam. Eaque
            unde voluptatibus ipsum, explicabo nam dolor, dolores, consequatur
            voluptate porro repudiandae error pariatur.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Home;
