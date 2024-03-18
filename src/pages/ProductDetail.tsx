import { useParams } from "react-router-dom";
import { useFetchSingleSneakerQuery } from "../redux/services/sneakersApi";
import { Container } from "@mui/material";

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useFetchSingleSneakerQuery(id);
  console.log(data);

  return (
    <>
      <Container maxWidth="lg" sx={{ pt: "60px" }}>
        {data.id}
      </Container>
    </>
  );
};

export default ProductDetail;
