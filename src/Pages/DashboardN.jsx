// src/Pages/DashboardN.jsx
import React, { useMemo, useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
  Button,
  TablePagination,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function generateRandomRow(id, cols) {
  const row = { id };
  cols.forEach((c, i) => {
    if (i === 0) row[c] = `Row ${id}`;
    else row[c] = Math.floor(Math.random() * 1000);
  });
  return row;
}

export default function DashboardN({ rows = 18, cols = 6 }) {
  const columns = useMemo(() => {
    const arr = [];
    for (let i = 0; i < cols; i++) arr.push(i === 0 ? "Name" : `Metric ${i}`);
    return arr;
  }, [cols]);

  const data = useMemo(
    () => Array.from({ length: rows }).map((_, i) => generateRandomRow(i + 1, columns)),
    [rows, columns]
  );

  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(6);

  const visibleRows = useMemo(() => {
    const start = page * pageSize;
    return data.slice(start, start + pageSize);
  }, [data, page, pageSize]);

  const exportToExcel = () => {
    const sheetData = data.map((r) => {
      const obj = {};
      columns.forEach((c) => (obj[c] = r[c]));
      return obj;
    });
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(sheetData);
    XLSX.utils.book_append_sheet(wb, ws, "DashboardN");
    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const blob = new Blob([wbout], { type: "application/octet-stream" });
    saveAs(blob, `dashboard-n-${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        m: 0,
        p: 0,
      }}
    >
      {/* Header with title and export button */}
      <Toolbar sx={{ justifyContent: "space-between", p: 2 }}>
        <Typography variant="h6">Dashboard N</Typography>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Export As
          </Typography>
          <Button variant="contained" onClick={exportToExcel} startIcon={<FileDownloadIcon />}>
            EXCEL
          </Button>
        </Box>
      </Toolbar>

      {/* Paper wrapper - takes remaining space */}
      <Paper
        variant="outlined"
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxSizing: "border-box",
          m: 0,
          mx: 2,
          mb: 2,
          borderRadius: 1,
        }}
      >
        {/* Table container - scrollable */}
        <TableContainer
          component="div"
          sx={{
            flex: 1,
            overflow: "auto",
            boxSizing: "border-box",
          }}
        >
          <Table stickyHeader size="small" sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                {columns.map((col) => (
                  <TableCell
                    key={col}
                    align={col === "Name" ? "left" : "center"}
                    sx={{ background: "#16a1d7", color: "#fff", fontWeight: 700 }}
                  >
                    {col}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {visibleRows.map((row) => (
                <TableRow hover key={row.id}>
                  {columns.map((col) => (
                    <TableCell key={col} align={col === "Name" ? "left" : "center"}>
                      {row[col]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination - fixed at bottom */}
        <Box sx={{ display: "flex", justifyContent: "center", borderTop: "1px solid #ddd", p: 1 }}>
          <TablePagination
            component="div"
            count={data.length}
            page={page}
            onPageChange={(_, newPage) => setPage(newPage)}
            rowsPerPage={pageSize}
            onRowsPerPageChange={(e) => {
              setPageSize(parseInt(e.target.value, 10));
              setPage(0);
            }}
            rowsPerPageOptions={[6, 12, 18]}
            labelRowsPerPage=""
            sx={{ ".MuiTablePagination-toolbar": { justifyContent: "center", minHeight: 40 } }}
          />
        </Box>
      </Paper>
    </Box>
  );
}
