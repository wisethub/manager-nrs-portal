const API_BASE_URL = "https://manager-nrs-api.onrender.com";

async function getHealth() {
  const res = await fetch(`${API_BASE_URL}/health`);
  return res.json();
}

async function getUsage(tenantId) {
  const res = await fetch(`${API_BASE_URL}/api/billing/usage/${tenantId}`);
  return res.json();
}

async function getPlan(tenantId) {
  const res = await fetch(`${API_BASE_URL}/api/billing/plan/${tenantId}`);
  return res.json();
}
