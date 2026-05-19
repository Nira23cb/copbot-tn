/**
 * CopBot TN - API client for Spring Boot backend
 */
const API_BASE = "http://localhost:8080/api";

async function apiRequest(endpoint, options = {}) {
  const url = `${API_BASE}${endpoint}`;
  const config = {
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  };

  const response = await fetch(url, config);
  const data = await response.json();

  if (!response.ok || data.success === false) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

const api = {
  signup: (body) =>
    apiRequest("/auth/signup", { method: "POST", body: JSON.stringify(body) }),

  login: (body) =>
    apiRequest("/auth/login", { method: "POST", body: JSON.stringify(body) }),

  getRights: () => apiRequest("/rights"),

  getFees: () => apiRequest("/fees"),

  getFaqs: () => apiRequest("/faqs"),

  askChatbot: (question) =>
    apiRequest("/chatbot/ask", {
      method: "POST",
      body: JSON.stringify({ question }),
    }),
};
