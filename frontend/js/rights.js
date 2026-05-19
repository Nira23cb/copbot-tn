document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("rightsList");
  container.innerHTML = '<p class="loading">Loading rights...</p>';

  try {
    const res = await api.getRights();
    const items = res.data || [];
    if (!items.length) {
      container.innerHTML = "<p>No rights information available.</p>";
      return;
    }
    container.innerHTML = items
      .map(
        (r) => `
      <article class="content-card">
        <h3>${escapeHtml(r.title)}</h3>
        <p>${escapeHtml(r.description)}</p>
      </article>`
      )
      .join("");
  } catch (err) {
    container.innerHTML = `<p class="alert alert-error">${escapeHtml(err.message)}. Ensure backend is running on port 8080.</p>`;
  }
});

function escapeHtml(text) {
  const d = document.createElement("div");
  d.textContent = text;
  return d.innerHTML;
}
