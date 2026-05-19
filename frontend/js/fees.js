document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("feesList");
  container.innerHTML = '<p class="loading">Loading fees...</p>';

  try {
    const res = await api.getFees();
    const items = res.data || [];
    container.innerHTML = items
      .map(
        (f) => `
      <article class="content-card">
        <h3>${escapeHtml(f.type)}</h3>
        <p class="meta">${escapeHtml(f.amount)}</p>
        <p>${escapeHtml(f.description)}</p>
      </article>`
      )
      .join("");
  } catch (err) {
    container.innerHTML = `<p class="alert alert-error">${escapeHtml(err.message)}. Ensure backend is running.</p>`;
  }
});

function escapeHtml(text) {
  const d = document.createElement("div");
  d.textContent = text;
  return d.innerHTML;
}
