import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { css } from "@emotion/react";

import Heading from "../components/pageHeader";
// // images
import Startimage from "../assets/quote-parallax.jpg";
import dayjs from "dayjs";

export default function TrackingPage() {
  // setting the title of the page
  document.title = "Tracking | Shree Shakti Trading";

  const [trackingId, setTrackingId] = useState("");
  const [startDate, setStartdate] = useState("");
  const [endDate, setEnddate] = useState(null);
  const [origin, setOrigin] = useState(null);
  const [originZip, setOriginZip] = useState("");
  const [destination, setDestination] = useState("");
  const [destinationZip, setDestinationZip] = useState("");

  const styles = {
    heading: css`
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      padding: 6rem 0;

      @media (max-width: 768px) {
        flex-direction: column;
        padding: 5rem 0;
      }
    `,
    imageStyle: css`
      background-image: url(${Startimage});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      color: yellow;
    `,
    wordStyle: css`
      padding: 3rem 0;
      margin: auto;
      max-width: 60%;
      text-align: center;
      @media (max-width: 768px) {
        padding: 2rem 0;
      }
    `,
    datepicker: css`
      width: 100%;
    `,
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(
      trackingId,
      startDate,
      endDate,
      origin,
      destination,
      originZip,
      destinationZip
      );

      let startDate_str = dayjs(startDate).format("DD/MM/YYYY");
      let endDate_str = dayjs(endDate).format("DD/MM/YYYY");

      const response = await fetch(
        `https://shreeshaktiserver.onrender.com/tracking`,
        {
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({
            trackingId,
            startDate_str,
            endDate_str,
            origin,
            originZip,
            destination,
            destinationZip
          }),
        }
      )
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;

        if(resData.status === "success") {
          console.log("Messege sent!");
        } else if (resData.status === "false") {
          console.log("Message failed to send")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return (
    <Box sx={{ background: "#f5f5f5", padding:"3.5rem 0" }}>
      <Heading
        img={Startimage}
        title="TRACKING"
        description={"We are here to help you track your shipment easily."}
      />

      <Container maxWidth="xl">
        <Box sx={styles.wordStyle}>
          <Typography
            variant="h4"
            color={"primary"}
            sx={{ fontFamily: "bebas neue" }}
          >
            Track a Shipment
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: "poppins" }}>
            Track your LTL, truckload, or intermodal shipment by entering your{" "}
            <b>Track number</b> below to get instant freight tracking
            information.
          </Typography>
        </Box>

        <Container maxWidth="md">
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField fullWidth label="Tracking Id" variant="outlined" value={trackingId} onChange={(e) => setTrackingId(e.target.value)}/>
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <DatePicker label="Start date" sx={styles.datepicker} value={startDate} onChange={(value) => setStartdate(value)} />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <DatePicker label="End date" sx={styles.datepicker} value={endDate} onChange={(value) => setEnddate(value)} />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Origin Country
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Orign Country: "
                    // onChange={handleChange}
                    value={origin} onChange={(e) => setOrigin(e.target.value)}
                  >
                    <MenuItem value={'India'}>India</MenuItem>
                    <MenuItem value={'Unitd States'}>Unitd States</MenuItem>
                    <MenuItem value={'Canada'}>Canada</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Origin Zip/Postal Zip"
                  variant="outlined"
                  value={originZip} onChange={(e) => setOriginZip(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Destination Country{" "}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Destination Country: "
                    // onChange={handleChange}
                    value={destination} onChange={(e) => setDestination(e.target.value)}
                  >
                    <MenuItem value={'India'}>India</MenuItem>
                    <MenuItem value={'Unitd States'}>Unitd States</MenuItem>
                    <MenuItem value={'Canada'}>Canada</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Destination Zip/Postal Zip"
                  variant="outlined"
                  value={destinationZip} onChange={(e) => setDestinationZip(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <Button variant="outlined" color="secondary" onClick={handleClick}>
                  Track
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Container>
    </Box>
  );
}
