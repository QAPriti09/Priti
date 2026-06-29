/* =========================================
   Sleek Mouse Pointer Backlighting Engine
========================================= */
window.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
    document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
});

/* =========================================
   Interactive Persistent Theme Engine
========================================= */
const themeToggleBtn = document.getElementById("themeToggleBtn");
const themeDropdown = document.getElementById("themeDropdown");

if (themeToggleBtn && themeDropdown) {
    themeToggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        themeDropdown.classList.toggle("open");
    });

    document.addEventListener("click", () => {
        themeDropdown.classList.remove("open");
    });

    themeDropdown.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            const selectedTheme = button.getAttribute("data-theme");
            document.documentElement.setAttribute("data-user-theme", selectedTheme);
            localStorage.setItem("portfolio-theme", selectedTheme);
            themeDropdown.classList.remove("open");
        });
    });

    const cachedTheme = localStorage.getItem("portfolio-theme");
    if (cachedTheme) {
        document.documentElement.setAttribute("data-user-theme", cachedTheme);
    }
}

/* =========================================
   Typed.js Multi-Subtitle Configuration
========================================= */
if (document.getElementById("typing")) {
    new Typed("#typing", {
        strings: [
            "Pritinanda Behera.",
            "a Senior QA Engineer at LanceSoft.",
            "an Accenture Client Engineer.",
            "a Selenium Automation Expert.",
            "a REST Assured Framework Architect."
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1600,
        loop: true
    });
}

/* =========================================
   Mobile Drawer Navigation Transitions
========================================= */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isExpanded = navLinks.classList.toggle("active");
        menuToggle.setAttribute("aria-expanded", isExpanded);
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

/* =========================================
   Interactive Skills Categorization Filter
========================================= */
const filterBtns = document.querySelectorAll(".filter-btn");
const skillCards = document.querySelectorAll(".skill-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");

        const targetCat = btn.getAttribute("data-category");

        skillCards.forEach(card => {
            const cardCat = card.getAttribute("data-cat");
            if (targetCat === "all" || cardCat === targetCat) {
                card.style.display = "block";
                card.style.animation = "fadeInUp 0.4s ease forwards";
            } else {
                card.style.display = "none";
            }
        });
    });
});

/* =========================================
   ROLE-SPECIFIC SUITE: Test Automation Simulator
========================================= */
const runTestsBtn = document.getElementById("runTestsBtn");
const terminalConsole = document.getElementById("terminalConsole");
const metricPass = document.getElementById("metricPass");
const metricFail = document.getElementById("metricFail");
const metricStatus = document.getElementById("metricStatus");

if (runTestsBtn) {
    const simulationLogs = [
        { text: "[INFO] Booting LanceSoft/Accenture integrated testing ecosystem matrix...", type: "system" },
        { text: "[INFO] Parsing enterprise framework execution configurations via Maven...", type: "system" },
        { text: "🚀 Threadpool dynamic allocation initialized. Spawning TestNG parallel executors...", type: "system" },
        { text: "🌐 ACCENTURE INTEGRATION: Running thread verification routines...", type: "system" },
        { text: "✔ TEST PASSED: accenture.global.core.verifyParallelRegressionPipeline() [Time: 1.1s]", type: "pass" },
        { text: "✔ TEST PASSED: accenture.global.api.validateSecureOAuthToken() [Time: 0.7s]", type: "pass" },
        { text: "🌐 HISTORICAL MODULE: Running CREST ERP transactional verification checks...", type: "system" },
        { text: "✔ TEST PASSED: crest.erp.sales.verifyOrderBookingWorkflow() [Time: 1.4s]", type: "pass" },
        { text: "🚀 Invoking REST Assured functional validation assertions...", type: "system" },
        { text: "✔ TEST PASSED: GET /api/v1/erp/inventory - Status 200 [Schema Matching]", type: "pass" },
        { text: "📱 MOBILE MODULE: SFA Flutter Engine framework launching context components...", type: "system" },
        { text: "✔ TEST PASSED: sfa.mobile.sync.validateOfflineDataSynchronization()", type: "pass" },
        { text: "[INFO] Merging framework metrics into global Allure Dashboard compilation streams...", type: "system" },
        { text: "📊 RESULT: 5 Scenarios executed. 0 Failures. Core Enterprise Build SUCCESS.", type: "pass" }
    ];

    runTestsBtn.addEventListener("click", () => {
        runTestsBtn.disabled = true;
        terminalConsole.innerHTML = "";
        metricPass.innerText = "0";
        metricFail.innerText = "0";
        metricStatus.innerText = "RUNNING";
        metricStatus.style.color = "#ff7a00";

        let currentLine = 0;
        
        function printNextLog() {
            if (currentLine < simulationLogs.length) {
                const log = simulationLogs[currentLine];
                const p = document.createElement("p");
                p.className = log.type === "system" ? "system-line" : log.type === "pass" ? "pass-line" : "err-line";
                p.textContent = log.text;
                terminalConsole.appendChild(p);
                terminalConsole.scrollTop = terminalConsole.scrollHeight;

                if (log.text.includes("TEST PASSED")) {
                    const currentPasses = parseInt(metricPass.innerText);
                    metricPass.innerText = currentPasses + 1;
                }

                currentLine++;
                setTimeout(printNextLog, 400);
            } else {
                metricStatus.innerText = "SUCCESS";
                metricStatus.style.color = "#2ea44f";
                runTestsBtn.disabled = false;
                runTestsBtn.innerHTML = "🔄 Re-run Suite Diagnostics";
            }
        }
        setTimeout(printNextLog, 200);
    });
}

/* =========================================
   Global Viewport Scroll Listeners
========================================= */
const backToTopBtn = document.getElementById("backToTop");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    const progress = document.getElementById("progress");
    if (progress) progress.style.width = scrollPercent + "%";

    if (scrollTop > 300) backToTopBtn.classList.add("show");
    else backToTopBtn.classList.remove("show");

    if (scrollTop > 50) {
        navbar.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
    } else {
        navbar.style.boxShadow = "none";
    }

    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollTop >= sectionTop) current = section.getAttribute("id");
    });

    navItems.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) link.classList.add("active");
    });
});

if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}