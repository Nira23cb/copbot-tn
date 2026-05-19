document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("faqList");
  container.innerHTML = '<p class="loading">Loading FAQs...</p>';

  try {
    const res = await api.getFaqs();
    const items = res.data || [];
    container.innerHTML = items
      .map(
        (f, i) => `
      <div class="faq-item" data-index="${i}">
        <button type="button" class="faq-question" aria-expanded="false">
          ${escapeHtml(f.question)}
          <span>+</span>
        </button>
        <div class="faq-answer">${escapeHtml(f.answer)}</div>
      </div>`
      )
      .join("");

    container.querySelectorAll(".faq-question").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const open = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", open);
        btn.querySelector("span").textContent = open ? "−" : "+";
      });
    });
  } catch (err) {
    container.innerHTML = `<p class="alert alert-error">${escapeHtml(err.message)}</p>`;
  }
});

function escapeHtml(text) {
  const d = document.createElement("div");
  d.textContent = text;
  return d.innerHTML;
}
