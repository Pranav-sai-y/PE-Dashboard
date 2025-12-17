import React from "react";
import {
  Box,
  Card,
  Typography,
  Button,
  Grid,
  AppBar,
  Toolbar,
  Avatar,
  CssBaseline,
  ThemeProvider,
  createTheme
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginInfoTop from "../Images/login-info-top.png"; // Main Hero Image
import LoginTopIcon from "../Images/login-top.png"; // Small Icon/Graphic
import SbiLogo from "../Images/sbi-logo.jpg";

// Theme (matching Dashboard)
const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#eaf9fb", // Soft blue background
      paper: "#ffffff",
    },
    primary: { main: "#1467b4" }, // SBI Blue
    secondary: { main: "#3b2e8e" },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700
        }
      }
    }
  }
});

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", bgcolor: "#eaf9fb" }}>

        {/* HEADER */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            background: "linear-gradient(90deg,#1467b4 0%, #3b2e8e 100%)",
            mb: 3
          }}
        >
          <Toolbar sx={{ minHeight: 70, px: 3 }}>
            {/* LEFT: LOGO */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mr: 4 }}>
              <img src={SbiLogo} alt="SBI Logo" style={{ width: 60, height: 60, borderRadius: 4, backgroundColor: 'white', padding: 2 }} />
            </Box>

            {/* CENTER TITLE */}
            <Typography variant="h6" sx={{ flex: 1, fontWeight: 500 }}>
              PLATFORM ENGINEERING
            </Typography>
          </Toolbar>
        </AppBar>

        {/* MAIN CONTENT */}
        <Box sx={{ flex: 1, px: 2, pb: 4, display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ width: '100%' }}>
            {/* 
               Grid Analysis:
               - We use a single container for all items (Image, Login Card, 3 PE Cards).
               - This ensures they share the same column logic and alignment.
               - Used xs=12 sm=8 for Image, xs=12 sm=4 for Login Card.
               - Used xs=12 sm=4 for each PE Card.
               - Result: Image sits over PE I & II. Login Card sits over PE III.
            */}
            <Grid container spacing={2} alignItems="center">

              {/* LEFT: HERO IMAGE */}
              <Grid item xs={12} sm={8}>
                <Box
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: 3,
                    height: { xs: 300, sm: 400 }, // Increased height significantly for Hero Image
                    '& img': { width: '100%', height: '100%', objectFit: 'cover' }
                  }}
                >
                  <img src={LoginInfoTop} alt="Platform Engineering Hero" />
                </Box>
              </Grid>

              {/* RIGHT: LOGIN CARD */}
              <Grid item xs={12} sm={4}>
                <Card
                  elevation={3}
                  sx={{
                    borderRadius: 3,
                    p: 3, // Increased padding
                    textAlign: 'center',
                    // height: 'auto', // Auto height to match content
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Box sx={{ mb: 1 }}>
                    <img src={LoginTopIcon} alt="Icon" style={{ width: 160, height: 90, objectFit: 'contain' }} />
                  </Box>

                  <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 700, fontSize: '1rem' }}>
                    Platform Engineering
                  </Typography>

                  <Typography variant="caption" color="text.secondary" sx={{ mb: 1.5, maxWidth: 260, fontSize: '0.8rem' }}>
                    Building Secure IT foundation that fuels Productivity
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    size="small"
                    onClick={handleLogin}
                    sx={{
                      bgcolor: "#ffc107",
                      color: "#000",
                      '&:hover': { bgcolor: "#ffca2c" },
                      borderRadius: 1,
                      py: 0.8,
                      fontSize: '0.9rem',
                      fontWeight: 700
                    }}
                  >
                    Login
                  </Button>
                </Card>
              </Grid>

              {/* BOTTOM: INFO CARDS SECTION (Flexbox Row to Prevent Stacking) */}
              <Grid item xs={12} sx={{ mt: 1 }}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'stretch' }}>
                  {[
                    { label: "PE I", title: "Platform Engineering I", color: "#039be5" },
                    { label: "PE II", title: "Platform Engineering II", color: "#280566" },
                    { label: "PE III", title: "Platform Engineering III", color: "#6a1b9a" }
                  ].map((item) => (
                    <Card
                      key={item.label}
                      sx={{
                        flex: 1, // Distribute width equally
                        p: 1.5,
                        borderRadius: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        boxShadow: 2,
                        minHeight: 180 // Keep compact height
                      }}
                    >
                      <Avatar
                        sx={{
                          bgcolor: item.color,
                          width: 56,
                          height: 56,
                          fontSize: '0.9rem',
                          fontWeight: 700,
                          mb: 1
                        }}
                      >
                        {item.label}
                      </Avatar>

                      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5, fontSize: '0.85rem' }}>
                        {item.title}
                      </Typography>

                      <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem', lineHeight: 1.4 }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                      </Typography>
                    </Card>
                  ))}
                </Box>
              </Grid>

            </Grid>
          </Box>
        </Box>

      </Box>
    </ThemeProvider>
  );
}
