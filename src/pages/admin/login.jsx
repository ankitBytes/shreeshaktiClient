import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import Snackbar from "@mui/material/Snackbar";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useEffect, useState } from "react";
import { UserAuth } from "../../contexts/authContext";
import { useLocation, useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { css } from "@emotion/react";
import Heading from "../../components/pageHeader";
import { Alert } from "@mui/material";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Breadcrumbs from "@mui/material/Breadcrumbs";




export default function AdminLogin() {
  const { currentUser, logIn } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formState, setFormState] = useState({ loading: false, error: null });
  const [loginStatus, setLoginStatus] = useState(
    location?.state?.from === "/admin/dashboard" ? false : true
  );

  useEffect(() => {
    setLoginStatus(location?.state?.isAdmin);
  }, [location]);

  useEffect(() => {
    if (currentUser) {
      navigate("/admin/dashboard", {
        state: { isAdmin: true },
      });
    }
    document.title = "Admin Login | Shree Shakti Express";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState({ loading: true, error: null });
    try {
      await logIn(email, password);
      setFormState({ loading: false, error: null });
      navigate("/admin/dashboard", {
        state: { isAdmin: true },
      });
    } catch (err) {
      let errmsg = err.code.replace("auth/", "").replaceAll("-", " ");
      console.log(errmsg);
      setFormState({ loading: false, error: errmsg });
    }
  };

  const styles = {
    formBox: css`
      margin: 0 auto;
      max-width: 500px;
      padding: 1rem;
    `,
    container: css`
      padding: 2rem 0;
    `,
  };

  return (
    <>
      <Box>
        <Heading
          title="ADMIN LOGIN"
          back={
            <Link to="/" style={{ textDecoration: "none" }}>
              <Stack direction="row" spacing={1} sx={{ maxWidth: "300px" }}>
                <ChevronLeftIcon
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#ef7f1a",
                  }}
                />
                <Typography
                  variant="body1"
                  fontWeight={"bold"}
                  sx={{ color: "#ef7f1a" }}
                >
                  Back to Home
                </Typography>
              </Stack>
            </Link>
          }
          links={
            <Breadcrumbs aria-label="breadcrumb">
              <Link to="/">Home</Link>
              <Link to="/admin/login">Admin Login</Link>
            </Breadcrumbs>
          }
        />


        <Container maxWidth="xl" sx={styles.container}>
          <Typography
            variant="h4"
            component="h1"
            align="center"
            sx={{
              fontFamily: "bebas neue",
              fontSize: "2rem", 
              color: "#ef7f1a",
            }}
          >
            Login as Admin
          </Typography>

          <Box sx={styles.formBox}>
            {/* error message for login */}
            {formState.error !== null && (
              <Alert
                variant="outlined"
                severity="error"
                onClose={() => setFormState({ error: null })}
              >
                {formState.error}
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <TextField
                type="email"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
                required
                disabled={formState.loading}
              />
              <TextField
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
                required
                disabled={formState.loading}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: "linear-gradient(45deg,#b51d50 0%,#ef7f1a 100%);",
                }}
                disabled={formState.loading}
              >
                {formState.loading ? "logging you in" : "Login"}
              </Button>
            </form>
          </Box>
          <Box
            sx={{
              maxWidth: { xs: "100%", sm: "320px" },
              padding: "2rem 1rem",
              position: "absolute",
              bottom: "0",
              left: "0",
            }}
          >
            <Snackbar
              open={!loginStatus}
              autoHideDuration={1500}
              // onClose={() => setLoginStatus(false)}
              message={"You were logged out!"}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}
