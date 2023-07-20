import React from "react";
import { Container, Stack, Typography, Avatar } from "@mui/material";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

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
    <div style={{ padding: "5rem 0" }} ref={ref}>
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
              color: "#F07C00",
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

        <Stack direction={"column"}>
          {leadersData.map((data, index) => (
            <motion.div 
            key={index}
            animate={controls}
            initial="hidden"
            variants={{
              visible: {
                opacity: 1,
                scale: 1,
                transition: { delay: 0.2 +  index * 0.4 },
                x: 0,
              },
              hidden: { x: index%2 ? 500: -500, opacity: 0.1 },
            }}
            >
              <div style={{ margin: "2.5rem 0" }}>
                <Stack
                  direction={
                    index % 2
                      ? { xs: "column-reverse", md: "row-reverse" }
                      : { xs: "column-reverse", md: "row" }
                  }
                  spacing={1}
                  sx={{
                    background:
                      index % 2
                        ? { xs: "transparent", md: "#e74028" }
                        : { xs: "transparent", md: "#ef7f1a" },
                    borderRadius:
                      index % 2
                        ? { xs: ".25rem", md: "12% 0% 0% 12% / 50% 1% 1% 50%" }
                        : { xs: ".25rem", md: "0% 15% 15% 0% / 0% 50% 50% 0%" },
                    maxHeight: { xs: "auto", md: "220px" },
                  }}
                >
                  <Typography
                    variant="body1"
                    color={{ xs: "#000", md: "#f5f5f5" }}
                    textAlign={"justify"}
                    sx={{ padding: ".5rem" }}
                  >
                    {data.desc}
                  </Typography>
                  <Stack direction={"column"} spacing={2} alignItems={"center"}>
                    <Avatar
                      sx={{
                        width: 220,
                        height: 220,
                        outline:
                          index % 2
                            ? ".5rem solid #ef7f1a"
                            : ".5rem solid #b51d50",
                      }}
                    />
                    <Typography
                      variant="h5"
                      fontWeight="medium"
                      color={"#000"}
                      fontFamily={"bebas neue"}
                    >
                      {data.name}
                      <Typography
                        variant="body1"
                        fontWeight="medium"
                        color={"#ef7f1a"}
                        sx={{ letterSpacing: "0.075rem" }}
                      >
                        DIRECTOR
                      </Typography>
                    </Typography>
                  </Stack>
                </Stack>
              </div>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </div>
  );
}

const leadersData = [
  {
    name: "Rashmi Sahoo",
    designation: "Director",
    image:
      "https://res.cloudinary.com/dcoderdtu/image/upload/v1634178929/leaders/rashmi_sahoo.jpg",
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
    image:
      "https://res.cloudinary.com/dcoderdtu/image/upload/v1634178929/leaders/rashmi_sahoo.jpg",
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
    image:
      "https://res.cloudinary.com/dcoderdtu/image/upload/v1634178929/leaders/rashmi_sahoo.jpg",
    desc: `Experiencedseniorbanker with 27 years in Kuwaitand Oman. In 2010, he co-foundedashipping
    company, now a major energy career company. He owns the largest production Company in
    Odisha, India and second largest company in East India. He has produced 33 films in Odiya,
    Bengali, Hindi, and Malayalam. He is also the biggest producer of daily serials with Zee and Star
    Group, having made over 8,000 episodes. Recipient of two National Award from President of
    India, 43 State Film & Tele Awards and 16 International Awards. He is a Post Graduate in Political
    Science, Public Administration and a nExecutive MBA from Harvard Business School,USA.`,
  },
  {
    name: "Manish Jain",
    designation: "Director",
    image:
      "https://res.cloudinary.com/dcoderdtu/image/upload/v1634178929/leaders/rashmi_sahoo.jpg",
    desc: `An MBA from Bombay University, having vast experience in maritime industry as well as
    various commodity trading for more than 20 years. He also has rich experience in Investment
    and Consulting of Indian Stock Market. He was heading shipping and trading desks of Kandla
    Export Corporation (KEC) for over 20 years. Previously, he worked with leading corporates in
    Indialike Indian Rayons Limited, Reliance Industries Limitedand Modern Woolen Limited, where
    he gained excellent experience in Marketing and General Management functions`,
  },
  {
    name: "Srikanta Mohapatra",
    designation: "Director",
    image:
      "https://res.cloudinary.com/dcoderdtu/image/upload/v1634178929/leaders/rashmi_sahoo.jpg",
    desc: `Having expertise in finance, accounting, sales, stores, and logistics, Mr. Srikanta Mohapatra
    has over 17 years of experience across varied industrial sectors. He has 10 years of
    experience at a renowned manufacturing company in Odisha, India. He is a CMA graduate
    from the Institute of Cost Accountants of India. He received his MBA from a reputable
    Institution. He has completed his LLB degree from M.S law college, Odisha, India.`,
  },
  {
    name: "Deepansh Mathur",
    designation: "Director",
    image:
      "https://res.cloudinary.com/dcoderdtu/image/upload/v1634178929/leaders/rashmi_sahoo.jpg",
    desc: `Mr. Deepansh Mathur has completed post graduation, Msc in International Business from
    Hult International Business School, Dubai. He has 3 years of experience in the Commercial
    Management and Post Fixture Activities in the Dry Bulk Sector of the international shipping
    industry. He has also taken various roles in the Ship Industry Analysis, Strategic Planning,
    Project Feasibility Analysis and Studying of Project Investment Proposal.`,
  },
];
