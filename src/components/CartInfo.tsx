import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import novaPosta from "../assets/novaposta.png";
import masterCard from "../assets/mastercard.png";
import Visa from "../assets/Visa.png";
import ApplePay from "../assets/applepay.png";
import GooglePay from "../assets/googlepay.png";
import PayPal from "../assets/Paypal.png";
import CheckIcon from "@mui/icons-material/Check";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#F2F3F8"),
  backgroundColor: "#F2F3F8",
  "&:hover": {
    backgroundColor: "#F2F3F1",
  },
  "&.selected": {
    border: "1px solid black", // Товщина 1px, чорний колір, сплощена лінія
  },
}));

const CartInfo = ({ cartInfo }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (cartInfo) {
      setSelectedSize(cartInfo.sizes[0]);
    }
  }, [cartInfo]);

  if (!cartInfo) {
    return null;
  }
  const { id, name, price, category, sizes } = cartInfo;

  const toggleCategory =
    category === "man" ? "Чоловічі кросіки " : "Жіночі кросівки";

  return (
    <Stack spacing={1}>
      <Typography variant="h4">
        {toggleCategory}
        {name}
      </Typography>
      <Divider />
      <Box display="flex" justifyContent="space-between">
        <Stack spacing={2} textAlign="center">
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {price} грн
          </Typography>
          <Box color="#00e676" display="flex" alignItems="center" gap="2px">
            <CheckIcon />
            <Typography>В наявності</Typography>
          </Box>
        </Stack>

        <Stack spacing={1}>
          <Button
            variant="contained"
            onClick={() =>
              dispatch(
                addToCart({
                  ...cartInfo,
                  size: selectedSize,
                  id: `${id}_${selectedSize}`,
                })
              )
            }
          >
            В кошик
          </Button>
          <Button variant="outlined">Придбати зараз</Button>
        </Stack>
      </Box>
      <Divider />

      <Stack spacing={1} pb={1}>
        <Typography>Розмір:</Typography>
        <div style={{ display: "flex", gap: 10 }}>
          {sizes?.map((size, index) => (
            <ColorButton
              size="small"
              variant="contained"
              key={index}
              className={size === selectedSize ? "selected" : ""}
              sx={{
                maxWidth: "30px",
                minWidth: "30px",
                maxHeight: "30px",
                minHeight: "30px",
              }}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </ColorButton>
          ))}
        </div>
      </Stack>

      <Stack>
        <Typography>Доставка:</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, py: 1 }}>
          <img src={novaPosta} width={20} />
          <Typography> Нова пошта</Typography>
          <Typography variant="caption" sx={{ ml: "auto", color: "gray" }}>
            За тарифами перевізника
          </Typography>
        </Box>
        <Divider />
        <Typography mt={1}>Надійні платежі:</Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, py: 1 }}>
            <img src={masterCard} width={40} />
            {/* <Typography>MasterCard</Typography> */}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, py: 1 }}>
            <img src={PayPal} width={40} />
            {/* <Typography>MasterCard</Typography> */}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, py: 1 }}>
            <img src={ApplePay} width={40} />
            {/* <Typography>Visa</Typography> */}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, py: 1 }}>
            <img src={GooglePay} width={40} />
            {/* <Typography>Visa</Typography> */}
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, py: 1 }}>
            <img src={Visa} width={40} />
            {/* <Typography>Visa</Typography> */}
          </Box>
        </Box>
        <Divider />

        <Typography mt={1}>Гарантія:</Typography>
        <Stack mb={1}>
          <Typography>
            Обмін/повернення товару належної якості протягом 14 днів.
          </Typography>
          <Typography>Гарантія від виробника: 12 міс</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CartInfo;
