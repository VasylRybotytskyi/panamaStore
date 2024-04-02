import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";
import CountItem from "./common/CountItem";

const BasketItem = ({ cart }) => {
  const dispatch = useDispatch();
  const { id, images, name, category, price, size } = cart;
  const toggleCategory =
    category === "man" ? "Чоловічі кросіки " : "Жіночі кросівки";

  //   const itemTotal = price * quantity;

  return (
    <Accordion>
      <AccordionSummary>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Card sx={{ maxWidth: "100px", maxHeight: "90px" }}>
              {images && images.length > 0 && (
                <CardMedia component="img" image={images[0]} alt="Car" />
              )}
            </Card>
          </Grid>
          <Grid
            item
            xs={10}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography variant="body2">
              {toggleCategory}
              {name}
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="caption">Розмір:{size}</Typography>
              <Typography sx={{ color: "red", textAlign: "right" }}>
                {price}₴/шт
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <CountItem cart={cart} />
          <IconButton onClick={() => dispatch(removeFromCart(id))}>
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default BasketItem;
