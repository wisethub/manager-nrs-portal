const API_BASE_URL = "https://manager-nrs-api.onrender.com";

async function readJsonResponse(res, path) {
  const text = await res.text();

  try {
    return JSON.parse(text);
  } catch (err) {
    throw new Error(`Non-JSON response from ${path}: ${text.slice(0, 120)}`);
  }
}

async function apiGet(path) {
  const res = await fetch(`${API_BASE_URL}${path}`);
  return readJsonResponse(res, path);
}

async function apiPost(path, payload) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  return readJsonResponse(res, path);
}

async function onboardTenant(payload) {
  return apiPost("/api/setup/onboard", payload);
}

async function testNrsConnection(payload) {
  return apiPost("/api/setup/test-nrs", payload);
}

async function getPlan(tenantId) {
  return apiGet(`/api/billing/plan/${tenantId}`);
}

async function getUsage(tenantId) {
  return apiGet(`/api/billing/usage/${tenantId}`);
}

async function getTenant(tenantId) {
  return apiGet(`/api/tenants/${tenantId}`);
}

async function getDocuments(tenantId) {
  return apiGet(`/api/setup/documents/${tenantId}`);
}

async function submitDocument(payload) {
  return apiPost("/api/documents/submit", payload);
}

async function markDocumentPaid(payload) {
  return apiPost("/api/payments/mark-paid", payload);
}
