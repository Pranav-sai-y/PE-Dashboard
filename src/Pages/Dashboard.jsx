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
  IconButton,
  Avatar,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Grid,
  Chip,
  CssBaseline,
  ThemeProvider,
  createTheme,
  Divider,
  Stack
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import SbiLogo from "../Images/sbi-logo.jpg";
import { Button } from "bootstrap";

// This single-file component reproduces the layout shown in the screenshot.
// Usage: copy into src/Dashboard.jsx and import in App.jsx. Install @mui/material and @mui/icons.

const drawerWidth = 220;

// const metrics = [
//   { id: 1, label: "Total Pendency", value: 120, color: "#fde8ef", border: "#f7cbd5" },
//   { id: 2, label: "AD", value: 89, color: "#e8f8f1", border: "#cfeedc" },
//   { id: 3, label: "AV", value: 42, color: "#f6eef8", border: "#eed9f0" },
//   { id: 4, label: "PIMS", value: 13, color: "#fde8ef", border: "#f7cbd5" },
//   { id: 5, label: "EDR", value: 77, color: "#e8f8f1", border: "#cfeedc" },
//   { id: 6, label: "Active Devices", value: 194, color: "#f6eef8", border: "#eed9f0" },
//   { id: 7, label: "Pending Approvals", value: 16, color: "#fde8ef", border: "#f7cbd5" },
//   { id: 8, label: "Resolved Alerts", value: 55, color: "#e8f8f1", border: "#cfeedc" },
// ];


const summary = [
  { id: 1, title: "Total SMS Sent", value: 38 },
  { id: 2, title: "EDR Pending", value: 52 },
  { id: 3, title: "AD Pending", value: 21 },
  { id: 4, title: "AV Pending", value: 14 },
  { id: 5, title: "Resolved Issues", value: 73 },
];


const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f1fbfd",
      paper: "#ffffff",
    },
    primary: {
      main: "#0b63b3",
    },
  },
  components: {
    MuiAppBar: { defaultProps: { elevation: 0 } },
  },
});


export default function BankingStyleDashboard() {
  const [activePage, setActivePage] = useState("home");

  const[date,useDate] = useState('03-Nov-2025');

  const [metrics, setMetrics] = useState([
      { id: 1, label: "Total Pendency", value: 120, color: "#fde8ef", border: "#f7cbd5" },
      { id: 2, label: "AD", value: 89, color: "#e8f8f1", border: "#cfeedc" },
      { id: 3, label: "AV", value: 42, color: "#f6eef8", border: "#eed9f0" },
      { id: 4, label: "PIMS", value: 13, color: "#fde8ef", border: "#f7cbd5" },
      { id: 5, label: "EDR", value: 77, color: "#e8f8f1", border: "#cfeedc" },
      { id: 6, label: "Active Devices", value: 194, color: "#f6eef8", border: "#eed9f0" },
      { id: 7, label: "Pending Approvals", value: 16, color: "#fde8ef", border: "#f7cbd5" },
      { id: 8, label: "Resolved Alerts", value: 55, color: "#e8f8f1", border: "#cfeedc" },
    ]);

    const RunReconcillation = () =>{

      useDate('04-Dec-2025');

      setMetrics([
        { id: 1, label: "Total Pendency", value: 90, color: "red", border: "#f7cbd5" },
        { id: 2, label: "AD", value: 76, color: "#e8f8f1", border: "#cfeedc" },
        { id: 3, label: "AV", value: 422, color: "#f6eef8", border: "#eed9f0" },
        { id: 4, label: "PIMS", value: 113, color: "#fde8ef", border: "#f7cbd5" },
        { id: 5, label: "EDR", value: 147, color: "#e8f8f1", border: "#cfeedc" },
        { id: 6, label: "Active Devices", value: 224, color: "#f6eef8", border: "#eed9f0" },
        { id: 7, label: "Pending Approvals", value: 46, color: "#fde8ef", border: "#f7cbd5" },
        { id: 8, label: "Resolved Alerts", value: 33, color: "#e8f8f1", border: "#cfeedc" },
        
      ]);

    }

 

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        {/* SIDEBAR */}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              bgcolor: "#2a0b5b",
              color: "#fff",
              borderRight: "0",
              px: 2,
            },
          }}
        >
          <Toolbar sx={{ py: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img 
                src={SbiLogo} 
                alt="SBI Logo" 
                style={{ width: 45, height: 45, objectFit: "contain" }} 
              />


              {/* <Avatar sx={{ bgcolor: "#0b63b3" }}>S</Avatar> */}
              <Box>
                {/* <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  SBI
                </Typography> */}
                <Typography variant="caption">Platform Engineering</Typography>
              </Box>
            </Box>
          </Toolbar>

          <Box sx={{ mt: 2 }}>
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
                sx: { color: "#fff", '& .MuiInputBase-input': { color: '#fff' } },
              }}
            />

            <List sx={{ mt: 2 }}>
              {["ADS Integration Pending", "DLP Agent Pending", "AV/EDR Agent Status", "Unauthorized Software", "Patch Updation Pendency", "Dashboard N"].map((t) => (
                <ListItemButton
                  key={t}
                  sx={{ color: "#fff", borderRadius: 1, mb: 0.5 }}
                  onClick={() => {
                    if (t === "Dashboard N") {
                      setActivePage("dashboardN");   // load the table module
                    } else {
                      setActivePage("home");         // keep your existing dashboard
                    }
                  }}
                >

                  <ListItemText primary={t} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Drawer>

        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
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
               
              {/* <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton> */}

              <Typography variant="h6" component="div" sx={{ flex: 1 }}>
                {/* left space for brand/title if needed */}
                PLATFORM ENGINEERING DASHBOARD
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={{ textAlign: "right", mr: 2 }}>
                  <Typography variant="subtitle2">Welcome Pranav Sai Yadavalli</Typography>
                  <Typography variant="caption">Branch: 4430 GITC BELAPUR</Typography>
                </Box>
                <Avatar>PY</Avatar>
                <Box
                  sx={{
                    ml: 1,
                    borderRadius: 2,
                    bgcolor: "#ffd54f",
                    px: 2,
                    py: 0.6,
                    color: "#000",
                    fontWeight: 700,
                  }}
                >
                  Logout
                </Box>
              </Box>
            </Toolbar>
          </AppBar>

          {/* MAIN CONTENT */}
          <Box sx={{ p: 3 }}>
              {activePage === "DashboardN" ? (
                <DashboardN />
              ) : (
                <>
            {/* {activePage === "dashboardN" ? (
              // Render the new table module when Dashboard N is selected
              <DashboardN />
            ) : ( */}

            <div>
              <Typography variant="h6" sx={{ mb: 2 }}>
                ITAM Pendency as on {date}
              </Typography>

              {/* <button type="button" class="btn btn-primary">Run Reconcillation</button> */}

            </div>

            {/* Top big rounded white card containing circular metrics */}
            <Card sx={{ borderRadius: 2, p: 3, mb: 3, boxShadow: 3 }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={8}>
                  <Grid container spacing={3}>
                    {metrics.map((m, idx) => (
                      <Grid item xs={6} sm={3} md={3} key={m.id}>
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
                            mx: "auto",
                          }}
                        >
                          <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            {m.value}
                          </Typography>
                          <Typography variant="caption">{m.label}</Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>

                <Grid item xs={12} md={4}>
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Stack spacing={2} sx={{ width: "100%" }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="body2">Department:</Typography>
                        <TextField select value="All" SelectProps={{ native: true }} size="small">
                          <option>All</option>
                          <option>PE I</option>
                          <option>PE II</option>
                          <option>PE III</option>
                        </TextField>
                      </Box>

                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Typography variant="body2">Status:</Typography>
                        <TextField select value="All" SelectProps={{ native: true }} size="small">
                          <option>All</option>
                          <option>Pending</option>
                        </TextField>
                      </Box>

                    
              
                    </Stack>
                  </Box>
                </Grid>
              </Grid>
            </Card>

            <button type="button" class="btn btn-primary" style={{marginBottom:'40px'}} onClick={RunReconcillation}>Run Reconcillation</button>

            {/* Lower summary cards row */}
            <Card sx={{ borderRadius: 2, p: 3, boxShadow: 3 }}>
              <Grid container spacing={3}>
                {summary.map((s) => (
                  <Grid item xs={12} sm={6} md={2.4} key={s.id}>
                    <Card sx={{ height: 110, display: "flex", flexDirection: "column" }}>
                      <Box sx={{ height: 12, background: "linear-gradient(90deg,#0b63b3,#3b2e8e)", borderTopLeftRadius: 4, borderTopRightRadius: 4 }} />
                      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", pt: 2 }}>
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
