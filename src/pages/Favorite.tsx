import { Typography, TextField, Button, Grid, Container } from "@mui/material";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Favorite = () => {
  const { favoriteData } = useSelector((state) => state.favorite);
  console.log(favoriteData);
  return (
    <Container sx={{ mt: 2 }}>
      <Typography variant="h5" textAlign="center" mb={2}>
        Список улюлених
      </Typography>
      {favoriteData.length > 0 ? (
        <Grid container spacing={1} sx={{ margin: "-8px" }}>
          {favoriteData?.map((sneaker, index) => (
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
            display: "grid",
            placeItems: "center",
            paddingTop: "200px",
          }}
        >
          У вас немає улюблених товарів
        </Typography>
      )}
    </Container>
  );
};

export default Favorite;
