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

export default function NewTest() {
  const [activePage, setActivePage] = useState("home");
  const navigate = useNavigate(); // logout support

  const handleLogout = () => {
    navigate("/"); // go back to login page
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* FULL WIDTH HEADER (FIXED) */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "linear-gradient(90deg,#1467b4 0%, #3b2e8e 100%)",
          boxShadow: "none"
        }}
      >
        <Toolbar sx={{ minHeight: 70, px: 3 }}>

          {/* LEFT: LOGO + TEXT */}
          {/* LEFT: LOGO */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mr: 4 }}>
            <img src={SbiLogo} alt="SBI Logo" style={{ width: 60, height: 60, borderRadius: 4, backgroundColor: 'white', padding: 2 }} />
          </Box>

          {/* CENTER TITLE */}
          <Typography variant="h6" sx={{ flex: 1 }}>
            PLATFORM ENGINEERING
          </Typography>

          {/* RIGHT USER INFO */}
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

      <Box sx={{ display: "flex", minHeight: "100vh", height: "100vh", pt: 0 }}>

        {/* LEFT SIDEBAR (CLIPPED) */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
              bgcolor: "#2a0b5b",
              color: "#fff",
              height: "100vh",
              overflow: "auto",
            },
          }}
        >
          {/* Toolbar spacer to push content down below AppBar */}
          <Toolbar sx={{ minHeight: 70 }} />

          <Box sx={{ px: 2, mt: 2 }}>
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

        {/* RIGHT MAIN CONTENT */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            overflow: "hidden"
          }}
        >
          {/* Toolbar spacer */}
          <Toolbar sx={{ minHeight: 70 }} />

          <Box
            sx={{
              flex: 1,
              overflow: "auto",
              width: "100%",
              p: activePage === "dashboardN" ? 0 : 3,
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
                <Card sx={{ borderRadius: 2, p: 2, mb: 2, boxShadow: 3 }}>

                  {/* DROPDOWNS */}
                  <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", mb: 2, gap: 3 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>Department:</Typography>
                      <TextField select value="All" size="small" SelectProps={{ native: true }} sx={{ minWidth: 120 }}>
                        <option>All</option>
                        <option>PE I</option>
                        <option>PE II</option>
                        <option>PE III</option>
                      </TextField>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>Status:</Typography>
                      <TextField select value="All" size="small" SelectProps={{ native: true }} sx={{ minWidth: 120 }}>
                        <option>All</option>
                        <option>Pending</option>
                      </TextField>
                    </Box>
                  </Box>

                  {/* CIRCLES - CSS GRID ENFORCEMENT */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" },
                      gap: 2, // Reduced gap from 4 to 2
                      mb: 1
                    }}
                  >
                    {metrics.map((m) => (
                      <Box key={m.id} sx={{ display: "flex", justifyContent: "center" }}>
                        <Box
                          sx={{
                            width: 110, // Reduced from 140
                            height: 110, // Reduced from 140
                            borderRadius: "50%",
                            bgcolor: m.color,
                            border: `3px solid ${m.border}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            textAlign: "center",
                            boxShadow: 1,
                          }}
                        >
                          <Typography variant="h5" sx={{ fontWeight: 700, color: "#333" }}>{m.value}</Typography>
                          <Typography variant="caption" sx={{ mt: 0.5, color: "#666", lineHeight: 1.1, fontSize: '0.7rem' }}>{m.label}</Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Card>

                {/* BUTTON */}
                <Box sx={{ mb: 2 }}>
                  <button type="button" className="btn btn-primary" style={{ padding: "6px 12px" }}>Run Reconciliation</button>
                </Box>

                {/* SUMMARY CARDS */}
                <Card sx={{ borderRadius: 2, p: 2, mt: 0, boxShadow: 3 }}>
                  {/* SUMMARY CARDS - CSS GRID ENFORCEMENT */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(5, 1fr)" },
                      gap: 2
                    }}
                  >
                    {summary.map((s) => (
                      <Box key={s.id}>
                        <Card sx={{ height: 100 }}> {/* Slight increase to fit header */}
                          {/* HEADER WITH TITLE */}
                          <Box
                            sx={{
                              height: 36,
                              background: "linear-gradient(90deg,#0b63b3,#3b2e8e)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center"
                            }}
                          >
                            <Typography variant="caption" sx={{ color: "#fff", fontWeight: 700, fontSize: "0.75rem" }}>
                              {s.title}
                            </Typography>
                          </Box>

                          {/* BODY WITH VALUE */}
                          <CardContent sx={{ textAlign: "center", p: "8px !important", display: "flex", alignItems: "center", justifyContent: "center", height: "calc(100% - 36px)" }}>
                            <Typography variant="h5" sx={{ color: "#0b93d6", fontWeight: 700 }}>
                              {s.value}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Box>
                    ))}
                  </Box>
                </Card>

              </>
            )}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
