import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Card, CardMedia, Hidden } from "@mui/material";

const SwiperCart = ({ sneakerInfo }) => {
  useEffect(() => {
    if (sneakerInfo) {
      console.log(sneakerInfo);
    }
  }, [sneakerInfo]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        cssMode={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Navigation, Thumbs, FreeMode]}
        className="mainSwiper"
      >
        {sneakerInfo?.images?.map((image, index) => (
          <SwiperSlide key={index}>
            <Card sx={{ borderRadius: "12px", border: "1px solid #ccc", p: 2 }}>
              <CardMedia
                image={image}
                sx={{
                  height: { xs: 300, sm: 500, md: 400 },
                }}
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Hidden mdDown>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode]}
        >
          {sneakerInfo?.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  borderRadius: "12px",
                  border: "1px solid #ccc",
                  p: 1,
                  cursor: "pointer",
                }}
              >
                <CardMedia image={image} sx={{ height: 70 }} />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Hidden>
    </>
  );
};

export default SwiperCart;
