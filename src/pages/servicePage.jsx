import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Heading from "../components/pageHeader";

// import { css } from "@emotion/react";
import { css } from "@emotion/react";

import S1 from "../assets/services-1.jpg";
import S2 from "../assets/services-2.jpg";
import Startimage from "../assets/quote-parallax.jpg";

export default function MediaCard() {
  // setting the title of the page
  document.title = "Services | Shree Shakti Trading";
  const styles = {
    imageStyle: css`
      background-image: url(${Startimage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: yellow;
    `,
    wordStyle: css`
      padding: 3rem 0;
      // text-align: center;
      @media (max-width: 768px) {
        padding: 2rem 0;
      }
    `,
    body: css`
      // background: white;
    `,
  };
  return (
    <>
      <div style={{ padding: "3.5rem 0" }}>
        <Box sx={styles.body}>
          <Heading
            title="Services"
            description={"We are here to help you track your shipment easily."}
            links={
              <Breadcrumbs aria-label="breadcrumb">
                <Link to="/">Home</Link>
                <Link to="/services">Our Services</Link>
              </Breadcrumbs>
            }
          />
          <Container maxWidth="xl" sx={{ paddingBottom: "2rem" }}>
            <Box sx={styles.wordStyle}>
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "bebas neue",
                  color: "#ef7f1a",
                  textAlign: "center",
                }}
              >
                SERVICES
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  sx={{ color: "#094559", textTransform: "uppercase" }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit
                </Typography>
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {[0, 1, 2, 3, 4, 5].map((item, index) => (
                <Grid item xs={12} sm={6} lg={4} key={index}>
                  <Card
                    sx={{
                      background:
                        "linear-gradient(45deg, #B51D50 0%, #EF7F1A 100%)",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                    }}
                  >
                    <CardMedia sx={{ height: 200 }} image={S2} />
                    <CardContent>
                      <Typography
                        variant="h5"
                        component="div"
                        sx={{ fontFamily: "bebas neue", color: "#EAEAEA" }}
                      >
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontFamily: "poppins", color: "#EAEAEA" }}
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </div>
    </>
  );
}
