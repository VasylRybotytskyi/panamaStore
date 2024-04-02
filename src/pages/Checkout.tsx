import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import FormCheckout from "../components/common/FormCheckout";
import { useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";
import { useState } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cartData } = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({});
  console.log(formData);

  const handleFormData = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("cartData", JSON.stringify(cartData));
  };

  const totalAmount = cartData.reduce((acc, { price, quantity }) => {
    const itemTotal = price * quantity;
    return acc + itemTotal;
  }, 0);

  return (
    <Container maxWidth="lg" sx={{ pt: "10px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} order={{ xs: 1 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5">Оформлення замовлення</Typography>
            <FormCheckout setFormData={setFormData} />
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ position: { md: "sticky" }, top: 0, right: 0 }}
          order={{ xs: 3, md: 2 }}
        >
          <Paper elevation={3} sx={{ p: 2 }}>
            <Stack spacing={1}>
              <Typography variant="h5">Підсумок</Typography>
              <Divider />
              <Typography>Кількість товарів: {cartData?.length}</Typography>
              <Typography>Доставка Нова Пошта: від 70₴</Typography>
              <Typography>Комісія за переказ коштів: 20₴ + 2%</Typography>

              <Divider />
              <Typography>До сплати:{totalAmount}₴</Typography>
              <Button
                variant="contained"
                component={Link}
                to="/success"
                onClick={handleFormData}
                disabled={!Object.keys(formData).length}
              >
                Замовлення підтверджую
              </Button>
            </Stack>
          </Paper>
        </Grid>
        <Grid item xs={12} md={8} order={{ xs: 2, md: 3 }}>
          {cartData?.length > 0 && (
            <Paper elevation={3}>
              <Typography variant="h6" px={2} pt={1}>
                Товари
              </Typography>
              <List sx={{ flexGrow: 1, overflowY: "auto" }}>
                {cartData?.map((cart, index) => (
                  <BasketItem key={index} cart={cart} />
                ))}
              </List>

              <Box p={2} textAlign="right">
                <Typography variant="body2">
                  Загальна сума: {totalAmount}
                </Typography>
              </Box>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Checkout;
