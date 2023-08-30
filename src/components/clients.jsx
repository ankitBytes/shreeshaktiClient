/* eslint-disable react/no-unescaped-entities */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";

import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";

export default function Clients() {
  const [clientList, setClientList] = useState([]); // <-- [1 - state]
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "ShreeShaktiTradingClients"),
      (snapshot) => {
        const updatedList = snapshot.docs.map((doc) => doc.data());
        setClientList(updatedList);
      }
    );
    return () => unsubscribe(); // Unsubscribe from the snapshot listener when the component unmounts
  }, []);

  const ClientStyles = {
    logoImgContainer: {
      // aspectRatio: "1/1",
      padding: "1rem",
      maxHeight: "8rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "transparent",
    },
    logoImg: {
      width: "100%",
      objectFit: "contain",
      objectPosition: "center",
      aspectRatio: "1/1",
    },
    clientCarouselContainer: {
      padding: "2rem 0",
      width: "100%",
      height: "100%",
      // background: "linear-gradient(45deg, #B51D50 0%, #EF7F1A 100%)",
    },
  };

  return (
    <Box sx={ClientStyles.clientCarouselContainer}>
      <Container maxWidth="lg">
        <Stack spacing={2}>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              textAlign: "center",
              fontFamily: "bebas neue",
              color: "#F07C00",
            }}
          >
            Associate Brands
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{ color: "#094559", textTransform: "uppercase" }}
            >
              India's most reputed brands
            </Typography>
          </Typography>

          <Box>
            <Swiper
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                420: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                576: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                960: {
                  slidesPerView: 5,
                  spaceBetween: 40,
                },
              }}
              modules={[Autoplay]}
            >
              {clientList.map((client, index) => (
                <SwiperSlide key={index}>
                  <Paper
                    sx={ClientStyles.logoImgContainer}
                    variant="elevation"
                    elevation={0}
                  >
                    <img
                      src={client.downloadURL}
                      style={ClientStyles.logoImg}
                      alt={clientList.clientName}
                    />
                  </Paper>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
