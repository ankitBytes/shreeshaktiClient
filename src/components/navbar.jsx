import { css } from "@emotion/react";
import { m, useScroll, useMotionValueEvent ,useAnimationControls} from "framer-motion";

import { Menu as MenuIcon } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { Link as RLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Collapse from "@mui/material/Collapse";
import { useEffect, useState } from "react";
import ShreeShaktiLogo from "../assets/shreeshakti-logo.png";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const logoControls = useAnimationControls();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log("Page scroll: ", latest);
    if(latest < 0.03){
      logoControls.start('')
    }
  });

  const styles = {
    logo: css`
      height: 100%;
      display: flex;
      text-decoration: none;
      img {
        max-width: 3rem;
        object-fit: cover;
      }
    `,
    menuButton: css`
      margin-right: 1rem;
      color: #000000;
      @media (min-width: 768px) {
        display: none;
      }
    `,
    links: css`
      display: none;
      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `,

    link: css`
      color: #0392c1;
      font-size: 1.4rem;
      text-decoration: none;
      margin: 0 1rem;
      letter-spacing: 0.1rem;
      &:hover {
        // text-decoration: underline;
        color: #9d8f33;
      }
    `,

    main: css`
      font-family: "bebas neue", sans-serif;
      background: #eaeaea;
      padding: 0.5rem 0;
      position: fixed;
      width: 100%;
      min-height: 3.5rem;
      top: 0;
      z-index: 50;
    `,
  };

  return (
    <Box >
      <Box sx={styles.main}>
        <Container maxWidth="xl">
          <Stack
            sx={css`
              display: flex;
              justify-content: space-between;
            `}
            direction="row"
          >
            <Link component={RLink} to="/" sx={styles.logo}>
              <Box
                sx={css`
                  display: flex;
                  align-items: center;
                `}
              >
              <Avatar alt="Shree Shakti logo" src={ShreeShaktiLogo} />
                <Typography
                  variant="h5"
                  sx={{
                    textDecoration: "none",
                    fontFamily: "bebas neue",
                    paddingLeft: ".5rem",
                    color: "#000",
                  }}
                >
                  Shree Shakti Trading
                </Typography>
              </Box>
            </Link>
            <IconButton
              onClick={() => setOpen(!open)}
              sx={styles.menuButton}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </IconButton>

            <Stack sx={styles.links} direction='row' spacing={3}>
              <Link sx={styles.link} component={RLink} to="/">
                Home
              </Link>
              <Link sx={styles.link} component={RLink} to="/services">
                Services
              </Link>
              {/*<Link sx={styles.link} component={RLink} to="/admin/login">
                <AdminPanelSettingsIcon fontSize="large"/>
                </Link>*/}
            </Stack>
          </Stack>

          <Collapse in={open}>
            <Container
              maxWidth="xl"
              sx={css`
                @media (min-width: 770px) {
                  display: none;
                }
              `}
            >
              <Stack direction="column" spacing={1}>
                <Link></Link>
                <Link
                  sx={styles.link}
                  component={RLink}
                  to="/"
                  onClick={() => setOpen(!open)}
                >
                  Home
                </Link>
                <Link
                  sx={styles.link}
                  component={RLink}
                  to="/services"
                  onClick={() => setOpen(!open)}
                >
                  Services
                </Link>
                {/*<Link
                  sx={styles.link}
                  component={RLink}
                  to="/admin/login"
                  onClick={() => setOpen(!open)}
                >
                  Admin
              </Link>*/}
                
              </Stack>
            </Container>
          </Collapse>
        </Container>
      </Box>
    </Box>
  );
}
