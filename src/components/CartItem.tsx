import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";

export default function CartItem({ sneaker }) {
  return (
    <Card sx={{ maxWidth: 355, height: "100%" }}>
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
            {sneaker?.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          В корзину
        </Button>
        <Button size="small" color="primary">
          В корзину
        </Button>
      </CardActions> */}
    </Card>
  );
}
