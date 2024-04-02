import { Box, Card, CardMedia, Typography } from "@mui/material";

const CheckoutItem = ({ cartData }) => {
  return (
    <>
      {cartData?.map(({ id, images, name, quantity, price, size }) => (
        <Box
          key={id}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          borderBottom={1}
          py={1}
          gap={1}
        >
          <Card sx={{ maxWidth: { xs: "20%", sm: "90px" } }}>
            {images && images.length > 0 && (
              <CardMedia component="img" image={images[0]} alt="Car" />
            )}
          </Card>
          <Typography
            sx={{ typography: { md: "h6", sm: "body1", xs: "caption" } }}
          >
            {name},{size}р,{quantity}шт
          </Typography>

          <Typography
            sx={{
              typography: { md: "body1", sm: "body2", xs: "caption" },
            }}
          >
            {quantity * price}₴
          </Typography>
        </Box>
      ))}
    </>
  );
};

export default CheckoutItem;
