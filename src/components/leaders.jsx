import React from "react";
import { Container, Stack, Typography, Avatar, Grid, Box } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// leader's images
import Kuldeep from "../assets/kuldeep_mathur.jpg";
import Deepansh from "../assets/deepansh_mathur.jpg";
import Rashmi from "../assets/rashmi_sahoo.jpg";
import Srikanta from "../assets/srikanta_mohapatra.jpg"

export default function Leaders() {
  const controls = useAnimation();
  const ref = useRef();
  const isInView = useInView(ref, { margin: "0px 0px -300px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <div style={{ padding: "5rem 0", overflow: "hidden", background: "linear-gradient(45deg, #B51D50 0%, #EF7F1A 100%)" }} ref={ref}>
      <Container>
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
            noWrap
            gutterBottom
            sx={{
              textAlign: "center",
              fontFamily: "bebas neue",
              color: "#fafafa",
            }}
          >
            The Leaders
            <Typography
              variant="body2"
              fontWeight="bold"
              sx={{ textTransform: "uppercase", color: "#094559" }}
            >
              Strong leadership forging a brighter future
            </Typography>
          </Typography>
        </motion.div>

        {/* <Stack direction={"column"}> */}
        <Grid container spacing={4}>
          {leadersData.map((data, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                animate={controls}
                initial="hidden"
                variants={{
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { delay: 0.5 * index },
                    x: 0,
                  },
                  hidden: { x: index % 2 ? 500 : -500, opacity: 0 },
                }}
              >
                <Stack direction={"column-reverse"} spacing={1}>
                  <Typography
                    variant="body1"
                    // color={{ xs: "#000", md: "#f5f5f5" }}
                    textAlign={"justify"}
                    sx={{ padding: ".5rem" }}
                  >
                    {data.desc}
                  </Typography>
                  {/* image , name and designaiton */}
                  <Stack
                    direction={"column"}
                    spacing={2}
                    alignItems={"center"}
                    sx={{ padding: ".5rem" }}
                  >
                    <Box
                      sx={{
                        padding: ".5rem",
                        aspectRatio: "1/1",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(45deg, #b51d50 0%, #ef7f1a 100%)",
                      }}
                    >
                      <Avatar
                        src={data.image}
                        sx={{
                          width: 220,
                          height: 220,
                        }}
                      />
                    </Box>
                    <Typography
                      variant="h5"
                      fontWeight="medium"
                      color={"#fafafa"}
                      fontFamily={"bebas neue"}
                    >
                      {data.name}
                      <Typography
                        variant="body1"
                        fontWeight="medium"
                        color={"rgb(186 187 189)"}
                        sx={{
                          letterSpacing: "0.075rem",
                          textAlign: "center",
                        }}
                      >
                        DIRECTOR
                      </Typography>
                    </Typography>
                  </Stack>
                </Stack>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        {/* </Stack> */}
      </Container>
    </div>
  );
}

const leadersData = [
  {
    name: "Rashmi Sahoo",
    designation: "Director",
    image: Rashmi,
    desc: `Being groomed in a family of industrialists, Mrs Rashmi Sahoo is an expert in international
        and Indian cuisines. She has been using this talent of her's in enhancing and maintaining the
        tasty Ready-To-Eat products. She heads the technical & research wing which primarily
        deals with hygienic food processing and effective preservation of the same in Om Oil & Flour
        Mills Limited. Her knowledge in Nutritional Science has contributed a lot towards maintaining
        and enhancing the nutritional value of Frozen Ready to Eat food stuff.`,
  },
  {
    name: "Kuldeep Mathur",
    designation: "Director",
    image: Kuldeep,
    desc: `Having vast experience in International Shipping and Finance. Mr. Mathur has worked over
        29yearsas CEO and Group CFO ofleadingshippingcompanies in Middle East.He hasalso
        contributed to marine industry from time to time as Secretary General of 'UAE Shipping
        Association' (UAESA). Member of 'American Bureau of Shipping', USA. Member of 'ABS
        Middle East Committee' and Chairman of UAE Advisory Committee of Indian Register of
        Shipping.By profession,he is a Chartered Accountant and Company Secretary.`,
  },
  {
    name: "Akshaya Kumar Parija",
    designation: "Director",
    image: Srikanta,
    desc: `Experiencedseniorbanker with 27 years in Kuwaitand Oman. In 2010, he co-foundedashipping
    company, now a major energy career company. He owns the largest production Company in
    Odisha, India and second largest company in East India. He has produced 33 films in Odiya,
    Bengali, Hindi, and Malayalam. He is also the biggest producer of daily serials with Zee and Star
    Group, having made over 8,000 episodes. Recipient of two National Award from President of
    India, 43 State Film & Tele Awards and 16 International Awards. He is a Post Graduate in Political
    Science, Public Administration and a nExecutive MBA from Harvard Business School,USA.`,
  },
  {
    name: "Deepansh Mathur",
    designation: "Director",
    image: Deepansh,
    desc: `Mr. Deepansh Mathur has completed post graduation, Msc in International Business from
    Hult International Business School, Dubai. He has 3 years of experience in the Commercial
    Management and Post Fixture Activities in the Dry Bulk Sector of the international shipping
    industry. He has also taken various roles in the Ship Industry Analysis, Strategic Planning,
    Project Feasibility Analysis and Studying of Project Investment Proposal.`,
  },
];
