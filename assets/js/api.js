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
async function getTenant(tenantId) {
  const res = await fetch(`${API_BASE_URL}/api/tenants/${tenantId}`);
  return res.json();
}
async function markDocumentPaid(payload) {
  const res = await fetch(`${API_BASE_URL}/api/payments/mark-paid`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  return res.json();
}
async function getDocuments(tenantId) {
  const res = await fetch(`${API_BASE_URL}/api/documents/${tenantId}`);
  return res.json();
}
async function testNrsConnection(payload) {
  const res = await fetch(`${API_BASE_URL}/api/nrs/test-connection`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  return res.json();
}
async function submitDocument(payload) {
  const res = await fetch(`${API_BASE_URL}/api/documents/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  return res.json();
}
async function onboardTenant(payload) {
  const res = await fetch(`${API_BASE_URL}/api/tenants/onboard`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  return res.json();
}
