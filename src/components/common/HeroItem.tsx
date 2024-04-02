import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";

const HeroItem = ({ sneaker }) => {
  const { images } = sneaker;
  return (
    <Card
      sx={{
        height: "100%",
        margin: "0 auto",
        borderRadius: "12px",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s ease, opacity 0.3s ease",
        "&:hover": {
          transform: "scale(1.01)",
        },
        "&:hover .overlay": {
          opacity: 1,
        },
      }}
    >
      <CardMedia image={images[0]} sx={{ height: 170 }} />
    </Card>
  );
};

export default HeroItem;
