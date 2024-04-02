import { Logo, Nike } from "../utils/CreateIcon";
import NewBalance from "../assets/newbalance.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const customerInfo = [
  { icon: <AccessTimeIcon />, text: "Відправка протягом 48 годин" },
];

export const brands = [{ icon: NewBalance }];

export const sexs = [
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
