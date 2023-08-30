import { css } from "@emotion/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React from "react";

// logos
import Vision from "../assets/our-vision.svg";
import Mission from "../assets/our-mission.svg";
import Philosophy from "../assets/our-philosophy.svg";

// animation
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { Avatar } from "@mui/material";

export default function WhySection() {
  const controls = useAnimation();

  const ref = useRef();
  const isInView = useInView(ref, { margin: "0px 0px -300px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const whySectionData = [
    {
      heading: "our vision",
      desc: " With unwavering dedication and a relentless pursuit of innovation, we aim to set new standards and achieve unparalleled success in the global food and beverages trade industry.",
      logo: Vision,
    },
    {
      heading: "our Mission",
      desc: "We aim to build lasting relationship with our customers by maintaining the hishest standards of food quality and become the most preferred and reliable food and beverages supplier.",
      logo: Mission,
    },
    {
      heading: "our Philosophy",
      desc: "We are dedicated to providing a truly unique and exceptional experience to our customers, setting new standards of excellence in the food and beverages trade industry.",
      logo: Philosophy,
    },
  ];

  const styles = {
    whySection: css`
      min-height: 30vh;
      background: linear-gradient(45deg, #B51D50 0%, #EF7F1A 100%);
    `,
    card: css`
      padding: 1rem;
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-family: "poppins";

      & h5 {
        color: #fafafa;
      }

      & p {
        text-align: center;
      }
    `,
  };

  return (
    <Box sx={styles.whySection} ref={ref}>
      <Container maxWidth="lg" sx={{ padding: "3rem 1rem" }}>
        <motion.div
          animate={controls}
          initial={"hidden"}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.2 },
            },
            hidden: {
              opacity: 0,
              y: 100,
            },
          }}
        >
          <Typography
            variant="h2"
            noWrap
            gutterBottom
            sx={{
              textAlign: "center",
              fontFamily: "bebas neue",
              color: "#fafafa",
            }}
          >
            Why Choose Us?
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{ textTransform: "uppercase", color: "#094559" }}
            >
              The Value that define us{" "}
            </Typography>
          </Typography>
        </motion.div>

        <Grid container spacing={2} sx={styles.cardContainer}>
          {whySectionData.map((data, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                animate={controls}
                initial="hidden"
                variants={{
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.2 + index * 0.2 },
                    y: 0,
                  },
                  hidden: { y: 50, opacity: 0.1 },
                }}
              >
                <Box sx={styles.card}>
                  <Avatar
                    src={data.logo}
                    alt={data.heading}
                    sx={css`
                      width: 120px;
                      height: 120px;
                      margin: 1rem;
                      background: white;
                    `}
                  />
                  <Typography
                    variant="h5"
                    noWrap
                    sx={{ textTransform: "uppercase", fontWeight: "600" }}
                    gutterBottom
                  >
                    {data.heading}
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    {data.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
