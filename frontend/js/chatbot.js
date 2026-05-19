document.addEventListener("DOMContentLoaded", () => {
  const messages = document.getElementById("chatMessages");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");

  addBotMessage(
    "Hello! I am CopBot TN. Ask me about FIR, arrest rights, fees, women safety, cybercrime, or traffic fines."
  );

  document.querySelectorAll(".suggestion-chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      input.value = chip.dataset.q;
      form.dispatchEvent(new Event("submit"));
    });
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const question = input.value.trim();
    if (!question) return;

    addUserMessage(question);
    input.value = "";
    const loadingId = addBotMessage("Thinking...");

    try {
      const res = await api.askChatbot(question);
      document.getElementById(loadingId)?.remove();
      addBotMessage(res.data.answer);
    } catch (err) {
      document.getElementById(loadingId)?.remove();
      addBotMessage(
        "Unable to reach server. Please ensure backend is running on http://localhost:8080"
      );
    }
  });

  function addUserMessage(text) {
    const el = document.createElement("div");
    el.className = "chat-bubble user";
    el.textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
  }

  function addBotMessage(text) {
    const id = "msg-" + Date.now();
    const el = document.createElement("div");
    el.id = id;
    el.className = "chat-bubble bot";
    el.textContent = text;
    messages.appendChild(el);
    messages.scrollTop = messages.scrollHeight;
    return id;
  }
});
