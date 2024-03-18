import { useEffect, useState } from "react";
import CartGrid from "../components/CartGrid";
import { useQuerySneakerQuery } from "../redux/services/sneakersApi";
import { Box, Container, TextField } from "@mui/material";
import FilterBar from "../components/FilterBar";
import { Logo, Nike } from "../utils/CreateIcon";
import FilterPrice from "../components/FilterPrice";

// const prices =[
//   { name: "від 500 до 1000", value: "adidas", icon: <Logo sx={{ width: "20px" }} /> },
//   { name: "Найк", value: "puma", icon: <Nike sx={{ width: "20px" }} /> },
// ]

const brands = [
  { name: "Адідас", value: "adidas", icon: <Logo sx={{ width: "20px" }} /> },
  { name: "Найк", value: "puma", icon: <Nike sx={{ width: "20px" }} /> },
];

const sexs = [
  {
    name: "Чоловічі кросівки",
    value: "man",
    icon: <Logo sx={{ width: "20px" }} />,
  },
  {
    name: "Жіночі кросівки",
    value: "women",
    icon: <Nike sx={{ width: "20px" }} />,
  },
];

const sizes = [
  {
    name: "36 23см",
    value: 36,
    icon: <Logo sx={{ width: "20px" }} />,
  },
  {
    name: "37 23,5см",
    value: 37,
    icon: <Nike sx={{ width: "20px" }} />,
  },
  {
    name: "38 24см",
    value: 38,
    icon: <Nike sx={{ width: "20px" }} />,
  },
  {
    name: "39 24,5см",
    value: 39,
    icon: <Nike sx={{ width: "20px" }} />,
  },
  {
    name: "40 25см",
    value: 40,
    icon: <Nike sx={{ width: "20px" }} />,
  },
  {
    name: "41 25,5см",
    value: 41,
    icon: <Nike sx={{ width: "20px" }} />,
  },
];

const Products = () => {
  const [sneakers, setSneakers] = useState([]);
  const [searh, setSearh] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState([]);
  const [size, setSize] = useState([]);
  console.log(size);

  const { data } = useQuerySneakerQuery({
    q: searh,
    brand: brand,
    category: category,
    price: price,
    size: size,
  });

  useEffect(() => {
    if (data) {
      setSneakers(data);
      console.log(data);
    }
  }, [data]);
  return (
    <Container maxWidth="xl" sx={{ pt: "60px" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginY={3}
      >
        <Box display="flex" gap="20px">
          <FilterBar
            array={brands}
            nameOption="Бренд"
            selectedValues={brand}
            setSelectedValues={setBrand}
          />
          <FilterBar
            array={sexs}
            nameOption="Категорії"
            selectedValues={category}
            setSelectedValues={setCategory}
          />

          <FilterPrice setPrice={setPrice} />

          <FilterBar
            array={sizes}
            nameOption="Розмір"
            selectedValues={size}
            setSelectedValues={setSize}
          />
        </Box>

        <TextField
          size="small"
          label="Пошук"
          type="search"
          onChange={(e) => setSearh(e.target.value)}
        />
      </Box>

      <CartGrid sneakers={sneakers} />
    </Container>
  );
};

export default Products;
