import { Container } from "@mui/material";
import Hero from "../components/Hero";
import { useQuerySneakerQuery } from "../redux/services/sneakersApi";
import { useEffect, useState } from "react";
import SneakersSlide from "../components/SneakersSlide";
import CustomerInfo from "../components/CustomerInfo";

const Home = () => {
  const [sneakers, setSneakers] = useState([]);
  const { data } = useQuerySneakerQuery({
    q: "",
    brand: "",
    category: "",
    price: "",
    size: "",
  });

  useEffect(() => {
    if (data) {
      setSneakers(data);
    }
  }, [data]);
  return (
    <Container maxWidth="lg" sx={{ mt: 1 }}>
      <Hero sneakers={sneakers} />
      <SneakersSlide sneakers={sneakers} />
      {/* <CustomerInfo /> */}
    </Container>
  );
};

export default Home;
