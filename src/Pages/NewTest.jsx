// src/Pages/NewTest.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Avatar,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Grid,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SbiLogo from "../Images/sbi-logo.jpg";
import DashboardN from "./DashboardN.jsx";
import { useNavigate } from "react-router-dom"; // needed for logout redirect

// Drawer width
const drawerWidth = 220;

// Circle metrics
const metrics = [
  { id: 1, label: "Total Pendency", value: 120, color: "#fde8ef", border: "#f7cbd5" },
  { id: 2, label: "AD", value: 89, color: "#e8f8f1", border: "#cfeedc" },
  { id: 3, label: "AV", value: 42, color: "#f6eef8", border: "#eed9f0" },
  { id: 4, label: "PIMS", value: 13, color: "#fde8ef", border: "#f7cbd5" },
  { id: 5, label: "EDR", value: 77, color: "#e8f8f1", border: "#cfeedc" },
  { id: 6, label: "Active Devices", value: 194, color: "#f6eef8", border: "#eed9f0" },
  { id: 7, label: "Pending Approvals", value: 16, color: "#fde8ef", border: "#f7cbd5" },
  { id: 8, label: "Resolved Alerts", value: 55, color: "#e8f8f1", border: "#cfeedc" },
];

// Summary cards
const summary = [
  { id: 1, title: "Total SMS Sent", value: 38 },
  { id: 2, title: "EDR Pending", value: 52 },
  { id: 3, title: "AD Pending", value: 21 },
  { id: 4, title: "AV Pending", value: 14 },
  { id: 5, title: "Resolved Issues", value: 73 },
];

// Theme
const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f1fbfd",
      paper: "#ffffff",
    },
    primary: { main: "#0b63b3" },
  },
  components: {
    MuiAppBar: { defaultProps: { elevation: 0 } },
  },
});

// COMPONENT STARTS — renamed correctly
export default function NewTest() {
  const [activePage, setActivePage] = useState("home");
  const navigate = useNavigate(); // logout support

  const handleLogout = () => {
    navigate("/"); // go back to login page
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ display: "flex", minHeight: "100vh", height: "100vh" }}>
        
        {/* LEFT SIDEBAR */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              bgcolor: "#2a0b5b",
              color: "#fff",
              px: 2,
              height: "100vh",
              overflow: "auto",
            },
          }}
        >
          <Toolbar sx={{ py: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={SbiLogo} alt="SBI Logo" style={{ width: 45, height: 45 }} />
              <Typography variant="caption">Platform Engineering</Typography>
            </Box>
          </Toolbar>

          <Box sx={{ mt: 2 }}>
            {/* SEARCH BAR */}
            <TextField
              size="small"
              placeholder="Search"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon htmlColor="#fff" />
                  </InputAdornment>
                ),
                sx: { "& .MuiInputBase-input": { color: "#fff" }, color: "#fff" },
              }}
            />

            {/* SIDEBAR MENU */}
            <List sx={{ mt: 2 }}>
              {[
                "ADS Integration Pending",
                "DLP Agent Pending",
                "AV/EDR Agent Status",
                "Unauthorized Software",
                "Patch Updation Pendency",
                "Dashboard N",
              ].map((item) => (
                <ListItemButton
                  key={item}
                  sx={{
                    color: "#fff",
                    borderRadius: 1,
                    mb: 0.5,
                    backgroundColor:
                      item === "Dashboard N" && activePage === "dashboardN"
                        ? "rgba(255,255,255,0.2)"
                        : "transparent",
                  }}
                  onClick={() => {
                    setActivePage(item === "Dashboard N" ? "dashboardN" : "home");
                  }}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* RIGHT SIDE */}
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column", height: "100vh" }}>
          
          {/* HEADER */}
          <AppBar position="static" sx={{ bgcolor: "transparent", boxShadow: "none" }}>
            <Toolbar
              sx={{
                minHeight: 70,
                background: "linear-gradient(90deg,#1467b4 0%, #3b2e8e 100%)",
                color: "#fff",
                px: 3,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}
            >
              <Typography variant="h6" sx={{ flex: 1 }}>
                PLATFORM ENGINEERING
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ textAlign: "right", mr: 2 }}>
                  <Typography variant="subtitle2">Welcome Pranav Sai Yadavalli</Typography>
                  <Typography variant="caption">Branch: 4430 GITC BELAPUR</Typography>
                </Box>

                <Avatar>PY</Avatar>

                <Box
                  onClick={handleLogout}
                  sx={{
                    ml: 1,
                    borderRadius: 2,
                    bgcolor: "#ffd54f",
                    px: 2,
                    py: 0.6,
                    color: "#000",
                    fontWeight: 700,
                    cursor: "pointer",
                    "&:hover": { backgroundColor: "#ffcc33" },
                  }}
                >
                  Logout
                </Box>
              </Box>
            </Toolbar>
          </AppBar>

          {/* MAIN CONTENT */}
          <Box
            sx={{
              flex: 1,
              overflow: "auto",
              width: "100%",
              p: activePage === "dashboardN" ? 0 : 3, // FULL WIDTH FOR DASHBOARD N
            }}
          >
            {activePage === "dashboardN" ? (
              <DashboardN />
            ) : (
              <>
                {/* MAIN DASHBOARD CONTENT */}
                <Typography variant="h6" sx={{ mb: 2 }}>
                  ITAM Pendency as on 04-Dec-2025
                </Typography>

                {/* circles + dropdown card */}
                <Card sx={{ borderRadius: 2, p: 3, mb: 3, boxShadow: 3 }}>

                  {/* DROPDOWNS */}
                  <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 10 }}>
                    <div>
                      <Typography variant="body2">Department:</Typography>
                      <TextField select value="All" size="small" SelectProps={{ native: true }} sx={{ minWidth: 100, mb: 1 }}>
                        <option>All</option>
                        <option>PE I</option>
                        <option>PE II</option>
                        <option>PE III</option>
                      </TextField>

                      <Typography variant="body2">Status:</Typography>
                      <TextField select value="All" size="small" SelectProps={{ native: true }} sx={{ minWidth: 100 }}>
                        <option>All</option>
                        <option>Pending</option>
                      </TextField>
                    </div>
                  </div>

                  {/* CIRCLES */}
                  <Grid container spacing={2}>
                    {metrics.map((m) => (
                      <Grid key={m.id} item xs={6} sm={3} md={3} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box
                          sx={{
                            width: 120,
                            height: 120,
                            borderRadius: "50%",
                            bgcolor: m.color,
                            border: `3px solid ${m.border}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                        >
                          <Typography variant="h5" sx={{ fontWeight: 700 }}>{m.value}</Typography>
                          <Typography variant="caption">{m.label}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Card>

                {/* BUTTON */}
                <button type="button" className="btn btn-primary">Run Reconciliation</button>

                {/* SUMMARY CARDS */}
                <Card sx={{ borderRadius: 2, p: 3, mt: 3, boxShadow: 3 }}>
                  <Grid container spacing={3}>
                    {summary.map((s) => (
                      <Grid key={s.id} item xs={12} sm={6} md={2.4}>
                        <Card sx={{ height: 110 }}>
                          <Box sx={{ height: 12, background: "linear-gradient(90deg,#0b63b3,#3b2e8e)", borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
                          <CardContent sx={{ textAlign: "center" }}>
                            <Typography variant="subtitle2">{s.title}</Typography>
                            <Typography variant="h4" sx={{ color: "#0b93d6", fontWeight: 700 }}>
                              {s.value}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Card>

              </>
            )}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
