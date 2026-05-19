/**
 * Tamil / English UI toggle (labels only)
 */
const translations = {
  en: {
    home: "Home",
    login: "Login",
    rights: "Know Your Rights",
    fir: "FIR Guide",
    fees: "Fees & Charges",
    rules: "Rules & Regulations",
    faq: "FAQ",
    chatbot: "Chatbot",
    portalTitle: "CopBot TN",
    portalSubtitle: "Your Guide to Police Services & Rights",
    emergency: "Emergency: 100 | 112",
    welcome: "Welcome to Tamil Nadu Citizen Police Portal",
    welcomeDesc: "Access information about your rights, FIR procedures, official fees, and get instant answers from CopBot.",
    quickAccess: "Quick Access",
    officialNotice: "This is an informational portal. For emergencies dial 100 or 112.",
  },
  ta: {
    home: "முகப்பு",
    login: "உள்நுழைவு",
    rights: "உங்கள் உரிமைகள்",
    fir: "FIR வழிகாட்டி",
    fees: "கட்டணங்கள்",
    rules: "விதிகள் & ஒழுங்குமுறை",
    faq: "கேள்வி பதில்",
    chatbot: "அரட்டை உதவி",
    portalTitle: "காப் பாட் TN",
    portalSubtitle: "போலீஸ் சேவைகள் & உரிமைகள் வழிகாட்டி",
    emergency: "அவசரம்: 100 | 112",
    welcome: "தமிழ்நாடு குடிமக்கள் போலீஸ் வழிகாட்டி வரவேற்கிறோம்",
    welcomeDesc: "உங்கள் உரிமைகள், FIR நடைமுறைகள், அதிகாரப்பூர்வ கட்டணங்கள் பற்றிய தகவல்களை அணுகவும்.",
    quickAccess: "விரைவு அணுகல்",
    officialNotice: "இது தகவல் வழங்கும் தளம். அவசரத்தில் 100 அல்லது 112 அழைக்கவும்.",
  },
};

function getLang() {
  return localStorage.getItem("copbot_lang") || "en";
}

function setLang(lang) {
  localStorage.setItem("copbot_lang", lang);
  applyLang(lang);
}

function applyLang(lang) {
  const t = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.textContent = lang === "en" ? "தமிழ்" : "English";
}

function initLang() {
  const lang = getLang();
  applyLang(lang);
  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = getLang() === "en" ? "ta" : "en";
      setLang(next);
    });
  }
}

function initSidebar() {
  const toggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  if (toggle && sidebar) {
    toggle.addEventListener("click", () => sidebar.classList.toggle("open"));
  }

  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".sidebar-nav a").forEach((link) => {
    if (link.getAttribute("href") === path) link.classList.add("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLang();
  initSidebar();
});
