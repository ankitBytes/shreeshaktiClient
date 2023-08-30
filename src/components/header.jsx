/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
// mui imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { css } from "@emotion/react";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

// images
import carouselImg1 from "../assets/headerCarousel1.jpg";
import carouselImg2 from "../assets/headerCarousel2.jpg";
import carouselImg3 from "../assets/headerCarousel-3.jpg";

import { Stack } from "@mui/material";

export default function PageHeader() {
  const styles = {
    container: css`
      position: relative;
      // max-height: 90vh;
      overflow: hidden;
      margin-top: 3.5rem;
    `,
    contentsContainer: css`
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (min-width: 1400px) {
        & div {
          transform: translateY(-50%);
      }

    `,
    carouselText: css`
      color: white;
      text-align: center;
      font-family: "poppins";
      padding: 0 2rem;
      @media (max-width: 768px) {
        font-size: 0.8rem;
      }
    `,
  };

  return (
    <>
      <Box sx={styles.container}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          effect="fade"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={true}
          modules={[Autoplay, Navigation, EffectFade]}
          style={{ maxHeight: "100vh" }}
        >
          {slideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  position: "relative",
                }}
              >
                <img
                  src={slide.image}
                  alt={"image one"}
                  css = {css`
                    width: 100%;
                    object-fit: cover;
                    @media (max-width: 768px) {
                      width: unset;
                      height: 80vh;
                    }
                  `}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.6)",
                  }}
                >
                  <Container maxWidth="lg" sx={styles.contentsContainer}>
                    <Stack direction="column" spacing={1}>
                      <Typography
                        variant="h4"
                        sx={css`
                          color: white;
                          text-align: center;
                          font-size: 2rem;
                          @media (max-width: 768px) {
                            font-size: 1rem;
                          }
                        `}
                      >
                        {slide.title}
                      </Typography>

                      <Typography
                        variant="h3"
                        sx={css`
                          text-transform: uppercase;
                          color: #ef7f1a;
                          text-align: center;

                          @media (max-width: 768px) {
                            font-size: 1.2rem;
                          }
                        `}
                      >
                        {slide.subtitle}
                      </Typography>
                      <Typography variant="body1" sx={styles.carouselText}>
                        {slide.description}
                      </Typography>
                    </Stack>
                  </Container>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

// data for the carousel
const slideData = [
  {
    title: "WE ARE PROUD",
    subtitle: "To be always on demand",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur autem quia harum rem odio nostrum quisquam quod natus dignissimos? Consequuntur?",
    image: carouselImg1,
  },
  {
    title: "WE ARE ACTIVE",
    subtitle: "To Ship your product on time",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur autem quia harum rem odio nostrum quisquam quod natus dignissimos? Consequuntur?",
    image: carouselImg2,
  },
  {
    title: "WE ARE",
    subtitle: "Always there for you",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur autem quia harum rem odio nostrum quisquam quod natus dignissimos? Consequuntur?",
    image: carouselImg3,
  },
];
