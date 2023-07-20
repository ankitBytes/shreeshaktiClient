import { Container, Typography, Box, Stack } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AboutSection() {
  const controls = useAnimation();
  const ref = useRef();
  const isInView = useInView(ref, { margin: "0px 0px -300px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <Box sx={{ padding: "3rem 1rem" }} ref={ref}>
      <Container maxWidth="lg">
        <motion.div
          animate={controls}
          initial={"hidden"}
          variants={{
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.3 },
            },
            hidden: {
              opacity: 0.3,
              y: 100,
            },
          }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              textAlign: "center",
              fontFamily: "bebas neue",
              color: "#F07C00",
            }}
          >
            who we are
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{ color: "#094559", textTransform: "uppercase" }}
            >
              few words about us
            </Typography>
          </Typography>

          <Stack direction={"column"} sx={{ padding: "2rem 0" }} spacing={2}>
            <Typography variant="body1" align="justify" fontWeight={"medium"}>
              At Shreeshakti Food & Beverage Trading L.L.C Dubai, UAE, we are
              committed to delivering excellence and exceed beyond expectations
              at every step on the way forward. As a trailblazing international
              trading company specializing in the food and beverages industry,
              Shreeshakti Food & Beverage is proud to work with renowned experts
              from diverse fields, including Spices, Breakfast cereals and
              variety of other edible products.
            </Typography>
            <Typography variant="body1" align="justify" fontWeight={"medium"}>
              We set ourselves apart by offering personalized services,
              competitive pricing, and on-time delivery, while ensuring the
              highest quality products for our esteemed clients.
            </Typography>
            <Typography variant="body1" align="justify" fontWeight={"medium"}>
              Our unwavering commitment is to provide you with high-quality,
              healthy, and safe alternatives for your everyday needs. With our
              unwavering dedication to efficient processing and distribution of
              food products, we aspire to become one of the most reliable
              suppliers in the market.
            </Typography>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
