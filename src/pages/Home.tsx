import { useEffect } from "react";
import Hero from "../components/Hero";
import { useQuerySneakerQuery } from "../redux/services/sneakersApi";

const Home = () => {
  const { data } = useQuerySneakerQuery();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
