import { Box, Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../redux/slices/cartSlice";

const CountItem = ({ cart }) => {
  const dispatch = useDispatch();
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      sx={{ width: "60px" }}
    >
      <IconButton onClick={() => dispatch(decrementQuantity(cart))}>
        <RemoveIcon
          sx={{
            maxWidth: "15px",
            minWidth: "15px",
            maxHeight: "15px",
            minHeight: "15px",
          }}
        />
      </IconButton>
      <Typography
        variant="body1"
        sx={{ border: "1px solid grey", px: "4px", borderRadius: "6px" }}
      >
        {cart?.quantity}
      </Typography>
      <IconButton onClick={() => dispatch(incrementQuantity(cart))}>
        <AddIcon
          sx={{
            maxWidth: "15px",
            minWidth: "15px",
            maxHeight: "15px",
            minHeight: "15px",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default CountItem;
