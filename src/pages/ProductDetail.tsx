import { useParams } from "react-router-dom";
import { useFetchSingleSneakerQuery } from "../redux/services/sneakersApi";
import { Container, Grid } from "@mui/material";
import SwiperCart from "../components/SwiperCart";
import { useEffect } from "react";
import CartInfo from "../components/CartInfo";

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useFetchSingleSneakerQuery(id);
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <>
      <Container maxWidth="lg" sx={{ pt: "20px" }}>
        <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
          <Grid item xs={12} md={6}>
            <SwiperCart sneakerInfo={data} />
          </Grid>

          <Grid item xs={12} md={6}>
            <CartInfo cartInfo={data} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductDetail;
