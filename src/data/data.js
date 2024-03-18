import { Logo, Nike } from "../utils/CreateIcon";

export const brands = [
  { name: "Адідас", value: "adidas", icon: <Logo sx={{ width: "20px" }} /> },
  { name: "Найк", value: "puma", icon: <Nike sx={{ width: "20px" }} /> },
];

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
