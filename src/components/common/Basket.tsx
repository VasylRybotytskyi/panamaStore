import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { BasketIcon } from "../../utils/CreateIcon";
import { Divider, IconButton, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketItem from "../BasketItem";

export default function Basket() {
  const [open, setOpen] = React.useState(false);
  const { cartData } = useSelector((state) => state.cart);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const totalAmount = cartData.reduce((acc, { price, quantity }) => {
    const itemTotal = price * quantity;
    return acc + itemTotal;
  }, 0);

  return (
    <>
      <IconButton sx={{ mr: 1 }} onClick={toggleDrawer(true)}>
        <BasketIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 400,
            p: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
          role="presentation"
        >
          <Typography variant="h6" textAlign="center" pb={2}>
            Корзина
          </Typography>
          <Divider />
          {cartData.length > 0 ? (
            <List sx={{ flexGrow: 1, overflowY: "auto" }}>
              {cartData?.map((cart, index) => (
                <BasketItem key={index} cart={cart} />
              ))}
            </List>
          ) : (
            <Typography
              sx={{
                display: "grid",
                placeItems: "center",
                height: "100%",
              }}
            >
              Ваша корзина пуста
            </Typography>
          )}

          <Divider />
          <Stack pt={2} spacing={1}>
            {totalAmount > 0 && (
              <>
                <Typography>Загальна сума: {totalAmount}</Typography>
                <Button
                  component={Link}
                  to="/checkout"
                  variant="contained"
                  onClick={toggleDrawer(false)}
                >
                  Оформити замовлення
                </Button>
                <Button variant="outlined">Повернутись до покупок</Button>
              </>
            )}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
