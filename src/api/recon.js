// src/api/recon.js

// 1. Run ITAM Reconciliation
export async function runItamRecon() {
  const response = await fetch("/api/itam-recon/run", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to start reconciliation");
  }

  // backend should return { runId: "12345" }
  return response.json();
}

// 2. Download unmatched Excel
export function downloadUnmatchedExcel(runId) {
  if (!runId) {
    throw new Error("runId is required to download excel");
  }

  window.location.href = `/api/itam-recon/${runId}/unmatched/excel`;
}
