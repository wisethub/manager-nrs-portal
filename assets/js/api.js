const API_BASE_URL = "https://manager-nrs-api.onrender.com";

async function apiGet(path) {
  const res = await fetch(`${API_BASE_URL}${path}`);
  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error(`Non-JSON response from ${path}: ${text.slice(0, 120)}`);
  }
}

async function apiPost(path, payload) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error(`Non-JSON response from ${path}: ${text.slice(0, 120)}`);
  }
}

async function onboardTenant(payload) {
  return apiPost("/setup/onboard", payload);
}

async function testNrsConnection(payload) {
  return apiPost("/setup/test-nrs", payload);
}

async function getPlan(tenantId) {
  return apiGet(`/billing/plan/${tenantId}`);
}

async function getUsage(tenantId) {
  return apiGet(`/billing/usage/${tenantId}`);
}

async function getTenant(tenantId) {
  return apiGet(`/tenants/${tenantId}`);
}

async function getDocuments(tenantId) {
  return apiGet(`/documents/${tenantId}`);
}

async function submitDocument(payload) {
  return apiPost("/documents/submit", payload);
}

async function markDocumentPaid(payload) {
  return apiPost("/payments/mark-paid", payload);
}
