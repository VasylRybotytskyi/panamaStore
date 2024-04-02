import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../redux/slices/favoritesSlice";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function CartItem({ sneaker }) {
  const { favoriteData } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  const isFavorite = favoriteData.some((item) => item.id === sneaker.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(sneaker.id));
    } else {
      dispatch(addToFavorite(sneaker));
    }
  };
  const toggleCategory =
    sneaker?.category === "man" ? "Чоловічі кросіки " : "Жіночі кросівки";

  return (
    <Card sx={{ maxWidth: 355, minHeight: "100%", position: "relative" }}>
      <CardActionArea>
        <Box component={Link} to={`/products/${sneaker.id}`}>
          {sneaker.images && sneaker.images.length > 0 && (
            <CardMedia
              component="img"
              height="200"
              image={sneaker.images[0]}
              alt="sneaker"
              sx={{ paddingX: "25px" }}
            />
          )}
        </Box>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {sneaker?.price}₴
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {toggleCategory}
            {sneaker?.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <IconButton
        sx={{ position: "absolute", top: "1px", right: "1px" }}
        aria-label="toggle-favorite"
        className="icon"
        onClick={handleToggleFavorite}
      >
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton>
    </Card>
  );
}
