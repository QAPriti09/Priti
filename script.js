// =========================================
// Dynamic Typing Effect (Hero Section)
// =========================================
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("typing")) {
        new Typed("#typing", {
            strings: [
                "Automation Architect",
                "QA Automation Lead",
                "Selenium & Appium Expert",
                "API Validation Specialist"
            ],
            typeSpeed: 70,
            backSpeed: 40,
            backDelay: 2000,
            loop: true
        });
    }

    // Scroll Progress Bar Tracker
    window.addEventListener("scroll", updateScrollProgress);
    
    // Back to Top Button Interaction
    const backToTopBtn = document.getElementById("backToTop");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Mobile Navigation Toggle
    const mobileMenuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Close mobile menu when clicking nav links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // Theme Switcher Dropdown Interaction
    const themeBtn = document.getElementById("themeBtn");
    const themeDropdown = document.getElementById("themeDropdown");
    if (themeBtn) {
        themeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            themeDropdown.classList.toggle("open");
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener("click", () => {
        if (themeDropdown) themeDropdown.classList.remove("open");
    });

    // Apply selected theme
    document.querySelectorAll(".theme-dropdown button").forEach(button => {
        button.addEventListener("click", (e) => {
            const selectedTheme = e.target.getAttribute("data-theme");
            document.documentElement.setAttribute("data-user-theme", selectedTheme);
            localStorage.setItem("preferred-theme", selectedTheme);
            themeDropdown.classList.remove("open");
        });
    });

    // Load saved theme on initialization
    const savedTheme = localStorage.getItem("preferred-theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-user-theme", savedTheme);
    }

    // Skills Category Filtering Mechanism
    const filterButtons = document.querySelectorAll(".filter-btn");
    const skillCards = document.querySelectorAll(".skill-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");
            
            const filterValue = e.target.getAttribute("data-filter");
            
            skillCards.forEach(card => {
                if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Interactive Telemetry Terminal Simulator
    const runTestBtn = document.getElementById("runTestBtn");
    if (runTestBtn) {
        runTestBtn.addEventListener("click", runAutomationSimulation);
    }
});

// =========================================
// Scroll Percentage Tracking
// =========================================
function updateScrollProgress() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById("progress");
    if (progressBar) progressBar.style.width = scrolled + "%";
}

// =========================================
// Dynamic Glowing Mouse Background Tracker
// =========================================
document.addEventListener("mousemove", (e) => {
    const glowBg = document.getElementById("glow-bg");
    if (glowBg) {
        glowBg.style.setProperty("--mouse-x", e.clientX + "px");
        glowBg.style.setProperty("--mouse-y", e.clientY + "px");
    }
});

// =========================================
// Terminal Simulation Logic
// =========================================
function runAutomationSimulation() {
    const consoleBody = document.getElementById("consoleBody");
    const suiteStatus = document.getElementById("suiteStatus");
    const successRate = document.getElementById("successRate");
    
    if (!consoleBody || !suiteStatus || !successRate) return;

    // Reset UI Indicators
    consoleBody.innerHTML = "";
    suiteStatus.innerText = "RUNNING";
    suiteStatus.style.color = "#ffbd2e";
    successRate.innerText = "--";

    const logs = [
        { text: "[RUNNING] Invoking Automation Suite via Maven Profiles...", type: "system-line" },
        { text: "[INFO] Initializing Selenium WebDriver configurations...", type: "system-line" },
        { text: "[INFO] Establishing REST Assured token-based authentication...", type: "system-line" },
        { text: "[PASSED] WebUI Verification: Login Functionality (TestNG)", type: "pass-line" },
        { text: "[PASSED] WebUI Verification: ERP Dashboard Load Time", type: "pass-line" },
        { text: "[INFO] Running Appium cross-device mobile execution...", type: "system-line" },
        { text: "[PASSED] Mobile Native Action: Inventory Sync Validation", type: "pass-line" },
        { text: "[PASSED] API Assertions: Microservices Transaction Validation", type: "pass-line" },
        { text: "[INFO] Generating automated cucumber HTML reports...", type: "system-line" },
        { text: "[SUCCESS] Execution suite completed successfully. Zero defects logged.", type: "pass-line" }
    ];

    let delay = 0;
    logs.forEach((log, index) => {
        setTimeout(() => {
            const p = document.createElement("p");
            p.className = log.type;
            p.innerText = log.text;
            consoleBody.appendChild(p);
            consoleBody.scrollTop = consoleBody.scrollHeight; // Auto-scroll terminal

            // Update header metrics on completion
            if (index === logs.length - 1) {
                suiteStatus.innerText = "PASSED";
                suiteStatus.style.color = "#27c93f";
                successRate.innerText = "100%";
            }
        }, delay);
        delay += 600; // Interval delay between log entries
    });
}