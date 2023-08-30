import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { useState } from "react";
import MuiAlert from "@mui/material/Alert";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Snackbar from "@mui/material/Snackbar";
import dayjs from "dayjs";
import { css } from "@emotion/react";

// animation
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

import ShreeShaktiLogo from "../assets/shreeshakti-logo.png";

function Copyright() {
  return (
    <Typography
      variant="overline"
      color="text.secondary"
      sx={{ textTransform: "uppercase" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        LeafLets
      </Link>{" "}
      {new Date().getFullYear()}
      {".All Rights Reserved."}
    </Typography>
  );
}

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function PageFooter() {
  // animation
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -300px 0px" });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [destinationTo, setDestinationTo] = useState("");
  const [destinationFrom, setDestinationFrom] = useState("");
  const [date, setDate] = useState(null);
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleQuoteForm = async (e) => {
    e.preventDefault();
    const recipient = 'info@shree-shakti.com';
    const subject = `Request for the tracing details of my shipment`;
    const htmlContent = `
    ${name} have requested a quote below are the details of the shipment

    Name: ${name}
    Email: ${email}
    Mobile: ${mobile}
    Source: ${destinationFrom}
    Destination: ${destinationTo}
    Start date: ${date}
    Goods type: ${type}
    Message: ${message}`;

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(htmlContent)}`;
    
    window.location.href = mailtoLink;
  };

  const footerStyles = {
    root: css`
      padding: 2rem 0;
      background: #eaeaea;
      overflow: hidden;
    `,
    section: {
      marginBottom: "20px",
      justifySelf: "center",
    },
    subtitle: {
      color: "#757575",
      marginBottom: "20px",
      fontFamily: "poppins",
    },
    iconButton: {
      marginRight: "10px",
    },
    icon: {
      color: "#444444",
      fontSize: "2rem",
    },
    formButton: {
      px: 3,
      py: 1,
    },
    copyright: {
      py: 2,
      textAlign: "center",
      backgroundColor: "#F5F5F5",
    },
    info: css`
      font-family: "poppins";
    `,
  };

  const styles = {
    heading: css`
      color: white;
      margin-bottom: 1rem;
      @media (max-width: 768px) {
        text-align: center;
      }
    `,
    quoteContainer: css`
      position: absolute;
      isolation: isolate;
      top: 0;
      width: 100%;
      height: 100%;
      @media (max-width: 768px) {
        position: relative;
      }
    `,
    formContainer: css`
      padding: 2rem 0.5rem;
      @media (min-width: 768px) {
        max-width: 50%;
      }
    `,
    quoteBack: css`
      display: block;
      width: 100%;
      height: 100%;
      max-width: 55%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      opacity: 0.9;
      background: linear-gradient(45deg, #b51d50 0%, #ef7f1a 100%);
      @media (max-width: 768px) {
        max-width: 100%;
      }
    `,
    // formInputField: css`
    //   input[type="number"]::-webkit-inner-spin-button,
    //   input[type="number"]::-webkit-outer-spin-button {
    //     -webkit-appearance: none;
    //     margin: 0;
    //   }

    //   & label {
    //     color: #aaa;
    //   }
    //   & label.Mui-focused {
    //     color: white;
    //   }
    //   & input {
    //     color: white;
    //   }

    //   & textarea {
    //     color: white;
    //   }

    //   & label.Mui-focused {
    //     color: white;
    //   }
    //   & .MuiInput-underline:after {
    //     border-bottom-color: white;
    //   }
    //   & .MuiOutlinedInput-root {
    //     & fieldset {
    //       border-color: #aaa;
    //     }
    //     &:hover fieldset {
    //       border-color: white;
    //     }
    //     &.Mui-focused fieldset {
    //       border-color: #ddd;
    //     }
    //   }
    // `,
    // datePickerField: css`
    //   width: 100%;
    //   svg {
    //     color: #aaa;
    //   }
    //   svg: hover {
    //     color: white;
    //   }
    //   & label {
    //     color: #aaa;
    //   }
    //   & label.Mui-focused {
    //     color: #aaa;
    //   }
    //   & input {
    //     color: white;
    //   }
    //   & .MuiOutlinedInput-root {
    //     & fieldset {
    //       border-color: #aaa;
    //     }
    //     &:hover fieldset {
    //       border-color: white;
    //     }
    //     &.Mui-focused fieldset {
    //       border-color: #aaa;
    //     }
    //   }
    // `,

    inputElement: css`
      font-family: "poppins";
    `,

    submitButton: css`
      background-color: #e74028;
      color: #fff;
      font-family: poppins;
      padding: 0.5rem 2rem;

      &:hover {
        background-color: #ef7f1a;
      }
    `,
  };

  return (
    <Box>
      <Box sx={footerStyles.root} ref={ref}>
        <Container maxWidth="xl">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2} style={footerStyles.section}>
                <Grid item xs={12}>
                  <img
                    src={ShreeShaktiLogo}
                    alt="ShreeShakti Logo"
                    style={{ height: "5rem", width: "5rem" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body1"
                    sx={{
                      textTransform: "uppercase",
                      fontFamily: "bebas neue",
                      fontSize: "1.25rem",
                    }}
                  >
                    ShreeShakti food and beverages trading l.l.c
                  </Typography>
                  <Typography variant="body2" style={footerStyles.subtitle}>
                    Delicious food and drinks for all occasions
                  </Typography>
                </Grid>
                <Grid item xs={12} sx={footerStyles.info}>
                  <Typography variant="body1">
                    <strong>
                      <AlternateEmailOutlinedIcon />
                    </strong>{" "}
                    info@shree-shakti.com
                  </Typography>
                  <Typography variant="body1">
                    <strong>
                      <PhoneOutlinedIcon />
                    </strong>{" "}
                    +971 424 086 55
                  </Typography>
                  <Typography variant="body1">
                    <strong>
                      <PhoneOutlinedIcon />
                    </strong>{" "}
                    +971 523 700 294
                  </Typography>
                  <Typography variant="body1">
                    <strong>
                      <LocationOnOutlinedIcon />
                    </strong>{" "}
                    Office MZ 02 Belshalat Building Commercial,<br/>Al Baraha,
                    Dubai, UAE
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <IconButton style={footerStyles.iconButton}>
                    <Facebook sx={footerStyles.icon} />
                  </IconButton>
                  <IconButton style={footerStyles.iconButton}>
                    <Twitter sx={footerStyles.icon} />
                  </IconButton>
                  <IconButton style={footerStyles.iconButton}>
                    <LinkedIn sx={footerStyles.icon} />
                  </IconButton>
                  <IconButton style={footerStyles.iconButton}>
                    <Instagram sx={footerStyles.icon} />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={"hidden"}
                animate={controls}
                variants={{
                  hidden: { opacity: 0, x: 200 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                }}
              >
                <Box sx={styles.heading}>
                  <Typography
                    variant="h3"
                    sx={{ fontFamily: "bebas neue", color: "#f07c00" }}
                  >
                    Reach out to Us
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "poppins", color: "#757575" }}
                  >
                    We always use best and fastest fleets
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "poppins",
                      color: "red",
                      fontSize: "0.7rem",
                    }}
                  >
                    * mark indicates required fields
                  </Typography>
                </Box>
                <Box>
                  <form onSubmit={(e) => handleQuoteForm(e)}>
                    <Grid container spacing={1} sx={styles.inputElement}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          color="warning"
                          size="small"
                          id="name"
                          label="Full Name"
                          sx={styles.formInputField}
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          color="warning"
                          size="small"
                          id="email"
                          label="Email"
                          type="email"
                          sx={styles.formInputField}
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          color="warning"
                          size="small"
                          id="mobile"
                          label="Mobile"
                          sx={styles.formInputField}
                          required
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          type="number"
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          size="small"
                          color="warning"
                          fullWidth
                          id="destinationTo"
                          label="Destination To"
                          sx={styles.formInputField}
                          required
                          value={destinationTo}
                          onChange={(e) => setDestinationTo(e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          color="warning"
                          size="small"
                          id="destinationFrom"
                          label="Destination From"
                          sx={styles.formInputField}
                          required
                          value={destinationFrom}
                          onChange={(e) => setDestinationFrom(e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          color="warning"
                          size="small"
                          id="shipmentType"
                          label="Shipping Type"
                          sx={styles.formInputField}
                          required
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                        />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                        <DatePicker
                          label="Date"
                          sx={styles.datePickerField}
                          value={date}
                          onChange={(value) => setDate(value)}
                          slotProps={{
                            textField: {
                              size: "small",
                              color: "warning",
                              fullWidth: "true",
                              required: "true",
                            },
                          }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          size="small"
                          color="warning"
                          id="Messege"
                          multiline
                          rows={4}
                          fullWidth
                          label="Messege"
                          sx={styles.formInputField}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          variant="contained"
                          size="large"
                          type="submit"
                          sx={styles.submitButton}
                        >
                          Submit
                        </Button>
                        <Snackbar
                          open={open}
                          autoHideDuration={5000}
                          onClose={handleClose}
                        >
                          <Alert
                            onClose={handleClose}
                            severity="success"
                            sx={css`
                              width: 100%;
                              @media (max-width: 768px) {
                                width: 70%;
                              }
                            `}
                          >
                            Sent!
                          </Alert>
                        </Snackbar>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={footerStyles.copyright}>
        <Copyright />
      </Box>
    </Box>
  );
}
