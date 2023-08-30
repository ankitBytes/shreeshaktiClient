import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Link as RLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { css } from "@emotion/react";

export default function Heading({ title, description, back, links }) {
  return (
    <Box
      sx={css`
        padding: 3rem 0;
        background: linear-gradient(45deg, #b51d50 0%, #ef7f1a 100%);
      `}
    >
      <Container maxWidth="lg">
        <Stack direction="column" spacing={1}>
          {back}
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent={"space-between"}
            sx={{
              "& > *": {
                color: "white",
              },
            }}
          >
            <Typography variant="h3" fontFamily={"bebas neue"}>
              {title}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ "@media (min-width: 768px)": { alignSelf: "center" } }}
            >
              {description}
            </Typography>
          </Stack>
          {links}
        </Stack>
      </Container>
    </Box>
  );
}
