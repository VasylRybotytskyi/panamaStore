import {
  Box,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import CartInfo from "../components/CartInfo";
import BasketItem from "../components/BasketItem";
import TableCheckout from "../components/common/TableCheckout";
import CheckoutItem from "../components/common/CheckoutItem";

const CheckoutSuccess = () => {
  const [formData, setFormData] = useState(null);
  const [cartData, setCartData] = useState(null);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    const storedCartData = localStorage.getItem("cartData");
    if (storedFormData && storedCartData) {
      setFormData(JSON.parse(storedFormData));
      setCartData(JSON.parse(storedCartData));

      localStorage.removeItem("formData");
      localStorage.removeItem("cartData");
    }
  }, []);

  const { name, surname, phone, email, city, department } = formData || {};

  console.log("kkkkkk", formData);
  console.log("d", cartData);
  return (
    <Container maxWidth="lg" sx={{ my: 2 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography textAlign="center" variant="h5" pb={2}>
          Дякуємо за замовлення 🥳
        </Typography>

        <Grid container>
          <Grid item xs={12}>
            <Typography py={1} sx={{ fontWeight: "bold" }}>
              Ваше замовлення
            </Typography>

            <Paper sx={{ p: 2 }}>
              <CheckoutItem cartData={cartData} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Typography py={1} sx={{ fontWeight: "bold" }}>
              Інформація про одержувача
            </Typography>
            <Paper sx={{ p: 2 }}>
              <Typography
                sx={{
                  typography: { md: "body1", sm: "body2", xs: "caption" },
                }}
              >
                Одержувач: {name} {surname}
              </Typography>
              <Typography
                sx={{
                  typography: { md: "body1", sm: "body2", xs: "caption" },
                }}
              >
                Телефон: {phone}
              </Typography>
              <Typography
                sx={{
                  typography: { md: "body1", sm: "body2", xs: "caption" },
                }}
              >
                Email: {email}
              </Typography>
              {city && department && (
                <Typography
                  sx={{
                    typography: { md: "body1", sm: "body2", xs: "caption" },
                  }}
                >
                  Адреса доставки: {city.Description},{department.Description}
                </Typography>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default CheckoutSuccess;
