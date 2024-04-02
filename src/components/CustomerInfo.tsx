import { Box, Grid, Paper, SvgIcon, Typography } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const customerInfo = [
  { icon: <AccessTimeIcon />, text: "Відправка протягом 48 годин" },
  { icon: <AccessTimeIcon />, text: "Безкоштовна доставка від 5000 грн" },
  { icon: <AccessTimeIcon />, text: "14 днів на повернення товару" },
  { icon: <AccessTimeIcon />, text: "Знижки для постійних клієнтів" },
];

const CustomerInfo = () => {
  const iconSize = 50;
  return (
    <Grid my={2} container spacing={2} bgcolor="#F2F3F8">
      {customerInfo.map(({ icon, text }, index) => (
        <Grid
          key={index}
          item
          xs={12}
          sm={6}
          md={3}
          display="flex"
          flexDirection="column"
          gap={1}
          justifyContent="center"
          alignItems="center"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              p: 1,
            }}
          >
            <SvgIcon style={{ fontSize: iconSize }}>{icon}</SvgIcon>
            <Typography px={2} textAlign="center">
              {text}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default CustomerInfo;
