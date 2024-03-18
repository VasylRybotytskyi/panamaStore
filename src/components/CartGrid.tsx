// import React from "react";
import { Grid, Typography } from "@mui/material";
import CartItem from "./CartItem";

const CartGrid = ({ sneakers }) => {
  return (
    <>
      {sneakers.length > 0 ? (
        <Grid container spacing={1} sx={{ margin: "-8px" }}>
          {sneakers?.map((sneaker, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{ padding: "8px" }}
            >
              <CartItem sneaker={sneaker} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          sx={{
            color: "#fff",
            display: "grid",
            placeItems: "center",
            paddingTop: "200px",
          }}
        >
          Нічого не знайдено
        </Typography>
      )}
    </>
  );
};

export default CartGrid;
