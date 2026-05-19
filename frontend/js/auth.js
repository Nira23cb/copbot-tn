/**
 * Login & Signup handling
 */
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const alertBox = document.getElementById("authAlert");
  const tabs = document.querySelectorAll(".auth-tab");
  const loginPanel = document.getElementById("loginPanel");
  const signupPanel = document.getElementById("signupPanel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const target = tab.dataset.tab;
      loginPanel.style.display = target === "login" ? "block" : "none";
      signupPanel.style.display = target === "signup" ? "block" : "none";
      hideAlert();
    });
  });

  function showAlert(msg, type = "error") {
    alertBox.textContent = msg;
    alertBox.className = `alert alert-${type}`;
    alertBox.style.display = "block";
  }

  function hideAlert() {
    alertBox.style.display = "none";
  }

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      hideAlert();
      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;

      try {
        const res = await api.login({ email, password });
        localStorage.setItem("copbot_user", JSON.stringify(res.data));
        showAlert(`Welcome, ${res.data.name}!`, "success");
        setTimeout(() => (window.location.href = "index.html"), 1200);
      } catch (err) {
        showAlert(err.message);
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      hideAlert();
      const name = document.getElementById("signupName").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const password = document.getElementById("signupPassword").value;

      if (password.length < 6) {
        showAlert("Password must be at least 6 characters");
        return;
      }

      try {
        const res = await api.signup({ name, email, password });
        localStorage.setItem("copbot_user", JSON.stringify(res.data));
        showAlert("Account created! Redirecting...", "success");
        setTimeout(() => (window.location.href = "index.html"), 1200);
      } catch (err) {
        showAlert(err.message);
      }
    });
  }

  const user = JSON.parse(localStorage.getItem("copbot_user") || "null");
  if (user && document.getElementById("userGreeting")) {
    document.getElementById("userGreeting").textContent = `Logged in as ${user.name}`;
  }
});
