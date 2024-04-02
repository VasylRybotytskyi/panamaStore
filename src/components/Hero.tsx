import { Box, Card, CardMedia, Grid, Paper, Typography } from "@mui/material";
import Banner from "../assets/banner.webp";
import Banner2 from "../assets/banner2.webp";
import Banner3 from "../assets/banner3.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CartItem from "./CartItem";
import CartGrid from "./CartGrid";
// import Nike from "../assets/nike.webp";

const Hero = ({ sneakers }) => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card>
              <CardMedia component="img" height="350" image={Banner} />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardMedia component="img" height="350" image={Banner2} />
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card>
              <CardMedia component="img" height="350" image={Banner3} />
            </Card>
          </SwiperSlide>
        </Swiper>
      </Grid>
      {/* <Grid item xs={12}>
        <Typography variant="h6" mb={1}>
          Новинки
        </Typography>
      </Grid> */}
    </Grid>
  );
};

export default Hero;
