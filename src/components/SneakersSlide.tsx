import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import HeroItem from "./common/HeroItem";
import { Typography } from "@mui/material";

const SneakersSlide = ({ sneakers }) => {
  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: "bold", my: 2 }}>
        Новинки
      </Typography>
      <Swiper
        spaceBetween={30}
        grabCursor={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400: {
            slidesPerView: 2,
          },
          720: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        style={{
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "3px",
          paddingRight: "3px",
        }}
      >
        {sneakers?.map((sneaker, index: number) => (
          <SwiperSlide key={index}>
            <HeroItem sneaker={sneaker} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SneakersSlide;
