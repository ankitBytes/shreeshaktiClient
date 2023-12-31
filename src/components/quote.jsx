import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { css } from "@emotion/react";
import dayjs from "dayjs";
// framer motion
import { m } from "framer-motion";

// import background images
import quoteBackground from "../assets/quote-parallax.jpg";

// animation
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Quote() {
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
    console.log(
      name,
      email,
      mobile,
      destinationTo,
      destinationFrom,
      date,
      type,
      message
    );
    // console.log(
    //   name,
    //   email,
    //   mobile,
    //   destinationTo,
    //   destinationFrom,
    //   date,
    //   type,
    //   message
    // );
    let date_str = dayjs(date).format("DD/MM/YYYY");

    const response = await fetch(
      `https://shreeshaktiserver.onrender.com/quote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobile,
          destinationTo,
          destinationFrom,
          date_str,
          type,
          message,
        }),
      }
    )
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        // console.log(resData);
        if (resData.status === "success") {
          handleClick();
        } else if (resData.status === "fail") {
          console.log("Message failed to send");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
    formInputField: css`
      input[type="number"]::-webkit-inner-spin-button,
      input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      & label {
        color: #aaa;
      }
      & label.Mui-focused {
        color: white;
      }
      & input {
        color: white;
      }

      & textarea {
        color: white;
      }

      & label.Mui-focused {
        color: white;
      }
      & .MuiInput-underline:after {
        border-bottom-color: white;
      }
      & .MuiOutlinedInput-root {
        & fieldset {
          border-color: #aaa;
        }
        &:hover fieldset {
          border-color: white;
        }
        &.Mui-focused fieldset {
          border-color: #ddd;
        }
      }
    `,
    datePickerField: css`
      width: 100%;
      svg {
        color: #aaa;
      }
      svg: hover {
        color: white;
      }
      & label {
        color: #aaa;
      }
      & label.Mui-focused {
        color: #aaa;
      }
      & input {
        color: white;
      }
      & .MuiOutlinedInput-root {
        & fieldset {
          border-color: #aaa;
        }
        &:hover fieldset {
          border-color: white;
        }
        &.Mui-focused fieldset {
          border-color: #aaa;
        }
      }
    `,

    inputElement: css`
      font-family: "poppins";
    `,

    submitButton: css`
      background-color: #e74028;
      color: #fff;
      font-family: poppins;
      padding: 1rem 3rem;

      &:hover {
        background-color: #ef7f1a;
      }
    `,
  };

  return (
    <>
      <Box sx={css`isolation; isolate;position: relative;`}>
        <Box
          sx={css`
            &::after{
              content: "";
              display: block;
              min-height: 90vh;
              background: rgba(0,0,0,0.5);

              @media (max-width: 768px){
                min-height: unset;
              }
            }

            @media (min-width: 768px) {
              position: relative;
              width: 100%;
              min-height: 90vh;
              z-index: -1;
              background: url(${quoteBackground}) no-repeat center center;
              background-size: cover;
              background-attachment: fixed;
            }

          `}
        ></Box>
        <Box sx={styles.quoteContainer} ref={ref}>
          <Box sx={styles.quoteBack}></Box>
          <motion.div
            initial={"hidden"}
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: -200 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
          >
            <Container maxWidth="lg">
              <Box sx={styles.formContainer}>
                <Box sx={styles.heading}>
                  <Typography
                    variant="h2"
                    sx={{ fontFamily: "bebas neue", color: "#fff" }}
                  >
                    Get a free quote
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ fontFamily: "poppins", color: "#EAEAEA" }}
                  >
                    We always use best and fastest fleets
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "poppins",
                      color: "#E62E23",
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
                          //
                          fullWidth
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
                          //
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
                          required
                          value={date}
                          onChange={(value) => setDate(value)}
                          slotProps={{ textField: { variant: "outlined" } }}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
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
              </Box>
            </Container>
          </motion.div>
        </Box>
      </Box>
    </>
  );
}
