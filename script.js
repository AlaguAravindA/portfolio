/* ==========================================================================
   CONTENT
   ========================================================================== */

const CONTENT = {
  person: {
    name: "Alagu Aravind A",
    role: "Software Engineer",
    email: "aalaguraj748@gmail.com",
    phone: "7347201040",
    location: "Coimbatore, India",
    portfolio: { label: "alaguaravinda.github.io/portfolio", url: "https://alaguaravinda.github.io/portfolio/" },
    linkedin: { label: "linkedin.com/in/alaguaravinda", url: "https://linkedin.com/in/alaguaravinda" },
    github: { label: "github.com/AlaguAravindA", url: "https://github.com/AlaguAravindA" }
  },

  about: {
    recruiter:
      "I'm a backend software engineer with 1+ year of experience building and maintaining REST " +
      "APIs, internal automation tools, and data pipelines using Python, Flask, and FastAPI. I " +
      "design Postgres-backed services with Redis caching, and I have hands-on experience " +
      "integrating open-source LLMs into production systems.",
    developer:
      "1+ year building backend systems in Python: REST APIs (Flask/FastAPI), internal automation " +
      "tooling, and data pipelines, with Postgres + Redis underneath for persistence and caching. " +
      "The last year has been split between that backend work and integrating open-source LLMs " +
      "(Ollama, RAG, prompt engineering) into production."
  },

  skillGroups: [
    { category: "Programming Languages", skills: ["Python", "JavaScript (ES6+)", "Java"] },
    { category: "Backend & API", skills: ["Flask", "FastAPI", "RESTful API design", "Postgres (SQL)", "Redis", "Microservices"] },
    { category: "AI / LLM Stack", skills: ["Ollama", "RAG", "LLM integration", "Prompt engineering", "Data pipelines"] },
    { category: "Tools", skills: ["VS Code", "Git", "GitHub", "Linux"] },
    { category: "Languages", skills: ["English (Fluent)", "Tamil (Native)", "Hindi (Fluent)"] }
  ],

  experience: [
    {
      role: "Software Developer (Python)",
      company: "Aggregate Intelligence",
      note: "Promoted from Intern to Full-time in July 2025",
      start: "09/2024",
      end: "Present",
      location: "Coimbatore, India",
      bullets: [
        "Designed and developed internal REST APIs (Flask/FastAPI) to automate infrastructure tooling like proxy configuration management.",
        "Built backend services on Postgres with Redis caching, handling data persistence for scraping pipelines and internal tools.",
        "Designed scalable Python web scraping pipelines and a reusable framework, improving data processing efficiency.",
        "Integrated and optimized open-source LLMs in production, improving performance and cost efficiency."
      ]
    }
  ],

  education: [
    { degree: "B.E, Computer Science and Engineering", school: "Karpagam College of Engineering", location: "Coimbatore, India", start: "2021", end: "2025", detail: "7.9 CGPA" },
    { degree: "Higher Secondary", school: "Kendriya Vidyalaya", location: "Faridkot, India", start: "2020", end: "2021", detail: "84%" }
  ],

  projects: [
    {
      id: "template-analyzer",
      group: "ai",
      title: "Template Analyzer (Ollama)",
      recruiter: {
        summary: "Built an internal RAG chatbot that retrieves and reuses 900+ previously validated web-scraping solutions instead of relying solely on LLM-generated code. Designed a semantic retrieval and ranking pipeline to match incoming scraping requests against historical sources, returning existing working implementations when a relevant match was found and using LLM generation as a fallback. Retrieval tuning improved match relevance by ~30% while pipeline optimizations reduced response latency by ~25%, helping engineers avoid repetitive scraper development and reducing hallucinated code.",
        role: "Owned end-to-end: LLM-backend integration, prompt design, and chat interface."
      },
      developer: {
        stack: ["Python", "React", "FastAPI", "Parquet", "Ollama"],
        metrics: ["900+ sources indexed", "~30% relevance ↑", "~25% latency ↓"],
        architecture: [
          "User pastes a curl request for a target URL",
          "Header/cookie KEYS (never values) are matched against a Parquet-backed store",
          "Automated chunking + embedding pipeline indexes dev notes and working code",
          "On match: context + conversation turns sent to on-prem LLM via Ollama",
          "No match: LLM call skipped entirely, static 'new source' message shown",
          "Response streams as markdown into React UI via FastAPI"
        ],
        decisions: [
          "Matched on header/cookie KEYS to ensure no sensitive tokens are stored",
          "Ran inference on-prem via Ollama to protect proprietary scraping logic",
          "Skipped LLM call on no-match to prevent hallucinated fixes",
          "Iterated chunking/retrieval to raise relevance (~30%) and cut latency (~25%)"
        ]
      }
    },
    {
      id: "proxy-gateway",
      group: "infra",
      title: "Secure Multi-Provider Proxy Gateway",
      recruiter: {
        summary: "Designed the backend network layer for secure, reliable traffic routing with no single point of failure. Built on 3+ independent WireGuard VPN tunnels, each isolated in its own network namespace to prevent cascade failures across teams. A GOST-based proxy layer load-balances traffic without vendor lock-in, while custom in-house DNS tunneling logic handles edge cases outside standard routing paths — closing a recurring data-leak vector that off-the-shelf tools couldn't cover. The result: a gateway multiple teams depend on daily, with no single tunnel failure able to take down routing for the rest.",
        role: "Architected and built the full gateway, end to end."
      },
      developer: {
        stack: ["Python", "Linux", "WireGuard", "GOST", "DNS tunneling"],
        architecture: [
          "3+ WireGuard VPN tunnels provisioned, each in an isolated network namespace",
          "GOST-based proxy layer load-balances and routes traffic across teams",
          "Custom DNS tunneling logic handles edge cases outside standard paths"
        ],
        decisions: [
          "Isolated each tunnel in its own namespace to prevent cascade failures",
          "Chose GOST for load-balanced routing without vendor lock-in",
          "Built DNS tunneling logic in-house to plug a recurring data-leak vector"
        ]
      }
    },
    {
      id: "mobile-proxy-middleware",
      group: "infra",
      title: "Mobile Proxy Middleware",
      recruiter: {
        summary: "Engineered a distributed proxy network from 100+ custom client nodes, replacing paid third-party proxy services with an in-house system. Built a middleware layer that exposes each node as a secure, addressable endpoint, with a horizontally scalable routing pipeline that load-balances 100,000+ requests reliably. Eliminated recurring third-party costs while prioritizing per-node connection reliability to prevent pool degradation at scale.",
        role: "Engineered the middleware and request-routing pipeline."
      },
      developer: {
        stack: ["Python", "Distributed systems", "Request routing"],
        architecture: [
          "100+ custom mobile devices connected as endpoints to a middleware layer",
          "Middleware exposes each device as a secure, addressable proxy node",
          "Scalable routing pipeline distributes and load-balances 100,000+ requests"
        ],
        decisions: [
          "Used existing mobile fleet as proxy endpoints, eliminating third-party costs",
          "Built routing pipeline to scale horizontally with device count",
          "Prioritized per-device connection reliability to prevent pool degradation"
        ]
      }
    }
  ]
};

/* ==========================================================================
   RENDER
   ========================================================================== */

const STRINGS = {
  recruiter: {
    eyebrow: "Portfolio",
    aboutTitle: "About",
    skillsTitle: "Skills",
    experienceTitle: "Experience",
    projectsTitle: "Projects",
    groupAi: "AI / GenAI Projects",
    groupInfra: "Backend Infrastructure Projects",
    educationTitle: "Education",
    contactTitle: "Contact",
    contactLead: "I am open to new opportunities — reach out any of the ways below.",
    toggleLabel: "git checkout dev-mode",
    footer: "Built with Love by Alagu Aravind A " 
  },
  developer: {
    eyebrow: "~/portfolio",
    aboutTitle: ":~$ cat about.md",
    skillsTitle: ":~$ ls skills/",
    experienceTitle: ":~$ ls experience/",
    projectsTitle: ":~$ ls projects/",
    groupAi: "projects/ai-genai/",
    groupInfra: "projects/backend-infra/",
    educationTitle: ":~$ tail -f education.log",
    contactTitle: ":~$ cat contact.md",
    contactLead: "# I am open to new opportunities — pick a channel below",
    toggleLabel: "View as Recruiter",
    footer: "# git commit -m 'built with love && caffine by alaguAravind()' "
  }
};

function renderStaticStrings(mode) {
  const s = STRINGS[mode];
  // document.getElementById("heroEyebrow").textContent = s.eyebrow;
  document.getElementById("aboutTitle").textContent = s.aboutTitle;
  document.getElementById("skillsTitle").textContent = s.skillsTitle;
  document.getElementById("experienceTitle").textContent = s.experienceTitle;
  document.getElementById("projectsTitle").textContent = s.projectsTitle;
  document.getElementById("groupAiTitle").textContent = s.groupAi;
  document.getElementById("groupInfraTitle").textContent = s.groupInfra;
  document.getElementById("educationTitle").textContent = s.educationTitle;
  document.getElementById("contactTitle").textContent = s.contactTitle;
  document.getElementById("contactLead").textContent = s.contactLead;
  document.getElementById("modeToggleLabel").textContent = s.toggleLabel;
  document.getElementById("footerNote").textContent = s.footer;
}

function renderIdentity() {
  document.getElementById("brandName").textContent = CONTENT.person.name;
  document.getElementById("heroName").textContent = CONTENT.person.name;
  document.getElementById("heroRole").textContent = CONTENT.person.role;
}

function renderAbout(mode) {
  document.getElementById("aboutBody").textContent = CONTENT.about[mode];
}

const ICONS = {
  email: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  location: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  linkedin: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>`,
  github: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.43-2.7 5.4-5.27 5.69.42.36.78 1.07.78 2.16 0 1.56-.02 2.82-.02 3.2 0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>`,
  link: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  copy: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`
};

function renderSkills(mode) {
  const container = document.getElementById("skillsGroups");
  container.innerHTML = "";
  CONTENT.skillGroups.forEach(group => {
    const wrap = document.createElement("div");
    wrap.className = "skill-group";

    const heading = document.createElement("h3");
    heading.className = "skill-group-title";
    // FIXED: Removed the awkward "//" prefix for dev mode skills
    heading.textContent = group.category; 
    wrap.appendChild(heading);

    const pillWrap = document.createElement("div");
    pillWrap.className = "skill-pills";
    group.skills.forEach(skill => {
      const pill = document.createElement("span");
      pill.className = "skill-pill";
      pill.textContent = skill;
      pillWrap.appendChild(pill);
    });
    wrap.appendChild(pillWrap);
    container.appendChild(wrap);
  });
}

function setUpMouseTrail() {
  const canvas = document.getElementById("mouseTrail");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (window.matchMedia("(hover: none)").matches) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  function getAccentColor() {
    return getComputedStyle(document.body).getPropertyValue("--accent").trim() || "#3DDC97";
  }

  function hexToRgb(hex) {
    const m = hex.replace("#", "").match(/.{1,2}/g);
    if (!m) return { r: 61, g: 220, b: 151 };
    return { r: parseInt(m[0], 16), g: parseInt(m[1], 16), b: parseInt(m[2], 16) };
  }

  window.addEventListener("mousemove", (e) => {
    const color = hexToRgb(getAccentColor());
    for (let i = 0; i < 2; i++) {
      particles.push({
        x: e.clientX,
        y: e.clientY,
        r: Math.random() * 2 + 1.5,
        life: 1,
        color,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6
      });
    }
    if (particles.length > 120) particles = particles.slice(-120);
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.life -= 0.02;
      p.x += p.vx;
      p.y += p.vy;
      if (p.life > 0) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.life * 0.5})`;
        ctx.fill();
      }
    });
    particles = particles.filter(p => p.life > 0);
    requestAnimationFrame(animate);
  }
  animate();
}



function highlightNumbers(text) {
  // Matches things like 900+, ~30%, 25%, 100,000+, 3+
  return text.replace(/(~?\d[\d,]*\+?%?)/g, '<strong class="stat-highlight">$1</strong>');
}

function renderRecruiterCard(project) {
  const card = document.createElement("article");
  card.className = "project-card-recruiter";
  card.innerHTML = `
    <h4 class="project-title">${project.title}</h4>
    <p class="project-summary">${highlightNumbers(project.recruiter.summary)}</p>
    <p class="project-role">${project.recruiter.role}</p>
    
    <!-- NEW: Dev Mode Hint Badge -->
    <div class="dev-hint-badge">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="4 17 10 11 4 5"></polyline>
        <line x1="12" y1="19" x2="20" y2="19"></line>
      </svg>
      <span>View technical architecture, stack & metrics in <strong>dev-mode</strong></span>
    </div>
  `;
  return card;
}

function setUpDevHintToggle() {
  // Event delegation: listens for clicks anywhere, but only acts if a .dev-hint-badge was clicked
  document.addEventListener("click", (e) => {
    const hintBadge = e.target.closest(".dev-hint-badge");
    
    // Only trigger if we clicked the badge AND we are currently in recruiter mode
    if (hintBadge && document.body.getAttribute("data-mode") === "recruiter") {
      e.preventDefault(); // Prevent any default link/button behavior
      
      const toggleBtn = document.getElementById("modeToggle");
      if (toggleBtn) {
        // Programmatically click the actual toggle button 
        // This ensures all your existing animation and state logic runs perfectly
        toggleBtn.click();
      }
    }
  });
}

function typeHeading(el, text, speed = 28) {
  el.textContent = "";
  el.classList.add("typing");
  let i = 0;
  const timer = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(timer);
      setTimeout(() => el.classList.remove("typing"), 900); // caret blinks briefly, then settles
    }
  }, speed);
}

function setUpHeadingTypeEffect() {
  if (document.body.getAttribute("data-mode") !== "developer") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const headings = document.querySelectorAll(".section-title");
  const seen = new WeakSet();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !seen.has(entry.target)) {
        seen.add(entry.target);
        const fullText = entry.target.textContent;
        typeHeading(entry.target, fullText);
      }
    });
  }, { threshold: 0.6 });

  headings.forEach(h => observer.observe(h));
}

function renderDeveloperCard(project) {
  const card = document.createElement("article");
  card.className = "project-card-dev";
  
  const metricsHtml = project.developer.metrics 
    ? `<div class="metric-row">${project.developer.metrics.map(m => `<span class="metric-badge">${m}</span>`).join('')}</div>` 
    : '';

  card.innerHTML = `
    <div class="term-header">
      <span class="term-dot"></span>
      <span class="term-filename">${project.id}.md</span>
    </div>
    <div class="term-body">
      <h4 class="project-title">${project.title}</h4>
      <div class="stack-tags">${project.developer.stack.map(t => `<span class="stack-tag">${t}</span>`).join('')}</div>
      ${metricsHtml}
      <p class="term-label">architecture</p>
      <ol class="arch-steps">${project.developer.architecture.map(s => `<li>${s}</li>`).join('')}</ol>
      <p class="term-label">design decisions</p>
      <ul class="decision-list">${project.developer.decisions.map(d => `<li>${d}</li>`).join('')}</ul>
    </div>
  `;
  return card;
}

function renderProjects(mode) {
  const aiContainer = document.getElementById("groupAiCards");
  const infraContainer = document.getElementById("groupInfraCards");
  aiContainer.innerHTML = "";
  infraContainer.innerHTML = "";

  CONTENT.projects.forEach(project => {
    const card = mode === "developer" ? renderDeveloperCard(project) : renderRecruiterCard(project);
    if (project.group === "ai") aiContainer.appendChild(card);
    else infraContainer.appendChild(card);
  });
}

function renderExperience(mode) {
  const container = document.getElementById("experienceList");
  container.innerHTML = "";

  CONTENT.experience.forEach(job => {
    const card = document.createElement("article");
    card.className = mode === "developer" ? "exp-card exp-card-dev" : "exp-card exp-card-recruiter";

    if (mode === "developer") {
      card.innerHTML = `
        <div class="term-header">
          
          <span class="term-filename">~$:cat ${job.company.toLowerCase().replace(/\s+/g, "-")}.md</span>
        </div>
        <div class="term-body">
          <h4 class="project-title">${job.role} @ ${job.company}</h4>
          <p class="exp-meta">${job.start} – ${job.end} · ${job.location}</p>
          ${job.note ? `<span class="metric-badge" style="margin-bottom:1em;display:inline-block;">${job.note}</span>` : ''}
          <ul class="decision-list">${job.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="exp-head">
          <div>
            <h4 class="project-title">${job.role}</h4>
            <p class="project-role" style="margin-bottom:0.25em;">${job.company}</p>
            ${job.note ? `<p class="project-role">${job.note}</p>` : ''}
          </div>
          <p class="exp-dates">${job.start} – ${job.end} · ${job.location}</p>
        </div>
        <ul class="exp-bullets">${job.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
      `;
    }
    container.appendChild(card);
  });
}

function renderEducation(mode) {
  const container = document.getElementById("educationList");
  container.innerHTML = "";

  CONTENT.education.forEach(entry => {
    const row = document.createElement("div");
    row.className = mode === "developer" ? "edu-row edu-row-dev" : "edu-row";
    
    // FIXED: Clean school name for recruiter, "//" only for dev mode
    const schoolText = mode === "developer" ? `// ${entry.school} · ${entry.location}` : `${entry.school} · ${entry.location}`;

    row.innerHTML = `
      <div>
        <h4 class="project-title">${entry.degree}</h4>
        <p class="project-role">${schoolText}</p>
      </div>
      <div class="edu-meta">
        <span>${entry.start} – ${entry.end}</span>
        <span>${entry.detail}</span>
      </div>
    `;
    container.appendChild(row);
  });
}



function copyToClipboard(text, feedbackEl) {
  navigator.clipboard.writeText(text).then(() => {
    const original = feedbackEl.textContent;
    feedbackEl.textContent = "Copied!";
    feedbackEl.classList.add("copied");
    setTimeout(() => {
      feedbackEl.textContent = original;
      feedbackEl.classList.remove("copied");
    }, 1500);
  }).catch(() => {
    // Fallback for browsers without clipboard API permission
    const temp = document.createElement("textarea");
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
  });
}

function copyToClipboard(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.innerHTML;
    btn.innerHTML = `${ICONS.copy}<span>Copied!</span>`;
    btn.classList.add("copied");
    setTimeout(() => {
      btn.innerHTML = original;
      btn.classList.remove("copied");
    }, 1500);
  });
}

function renderContactLinks() {
  const list = document.getElementById("contactLinks");
  list.innerHTML = "";
  const p = CONTENT.person;
  const mode = document.body.getAttribute("data-mode");
  const locationLabel = mode === "developer" ? `location: "${p.location}"` : p.location;

  // Copyable
  const copyableEntries = [
    { icon: ICONS.email, label: p.email, value: p.email },
    { icon: ICONS.phone, label: p.phone, value: p.phone }
  ];
  copyableEntries.forEach(entry => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "contact-copy-btn";
    btn.innerHTML = `${entry.icon}<span>${entry.label}</span>`;
    btn.addEventListener("click", () => copyToClipboard(entry.value, btn));
    li.appendChild(btn);
    list.appendChild(li);
  });

  // Links / plain
  const entries = [
    { icon: ICONS.location, label: locationLabel, href: null },
    { icon: ICONS.linkedin, label: "LinkedIn", href: p.linkedin.url },
    { icon: ICONS.github, label: "GitHub", href: p.github.url },
    // { icon: ICONS.link, label: "Portfolio", href: p.portfolio.url }
  ];
  entries.forEach(entry => {
    const li = document.createElement("li");
    if (entry.href) {
      const a = document.createElement("a");
      a.href = entry.href;
      a.innerHTML = `${entry.icon}<span>${entry.label}</span>`;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      li.appendChild(a);
    } else {
      const span = document.createElement("span");
      span.className = "contact-plain";
      span.innerHTML = `${entry.icon}<span>${entry.label}</span>`;
      li.appendChild(span);
    }
    list.appendChild(li);
  });
}

function renderDevInfo(mode) {
  const el = document.getElementById("devInfo");
  if (mode !== "developer") {
    el.hidden = true;
    el.innerHTML = "";
    return;
  }

  const focusGroups = CONTENT.skillGroups.filter(g => g.category !== "Languages");
  const topSkills = focusGroups.map(g => g.skills.slice(0, 2).join("/")).join("  |  ");
  const focusAreas = focusGroups.map(g => g.category.split(" ")[0]).join(" / ");

  el.innerHTML = `
    <div class="dev-info-row"><dt>role</dt><dd>${CONTENT.person.role}</dd></div>
    <div class="dev-info-row"><dt>stack</dt><dd>${topSkills}</dd></div>
    <div class="dev-info-row"><dt>focus</dt><dd>${focusAreas}</dd></div>
    <div class="dev-info-row"><dt>shipped</dt><dd>${CONTENT.projects.length} projects (AI + Infra)</dd></div>
    <div class="dev-info-row"><dt>status</dt><dd>open to work</dd></div>
  `;
  el.hidden = false;
}

function renderAll(mode) {
  renderStaticStrings(mode);
  renderIdentity();
  renderAbout(mode);
  renderSkills(mode);
  renderExperience(mode);
  renderProjects(mode);
  renderEducation(mode);
  renderDevInfo(mode);
  renderContactLinks(mode)
}

/* ==========================================================================
   CONTACT FORM
   ========================================================================== */

function setUpContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const isNetlify = window.location.hostname.endsWith("netlify.app") || document.querySelector('form[name="contact"]');

  if (!isNetlify || !form) {
    const wrapper = document.createElement("div");
    wrapper.className = "contact-fallback";
    const link = document.createElement("a");
    link.className = "submit-btn";
    link.href = `mailto:${CONTENT.person.email}`;
    link.textContent = "Email me directly";
    wrapper.appendChild(link);
    if (form) form.replaceWith(wrapper);
    return;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(data).toString()
    })
      .then(() => { status.textContent = "Message sent — thank you."; form.reset(); })
      .catch(() => { status.textContent = "Something went wrong. Try emailing directly."; });
  });
}

/* ==========================================================================
   MODE TOGGLE + BOOT-UP (Jitter-free, snappy)
   ========================================================================== */

const BOOT_LINES = [
  "Initializing dev mode...",
  "Loading skills.json...",
  "Mounting project archives...",
  "Rendering environment..."
];

let isAnimating = false;

function typeBootSequence(container, lines) {
  container.innerHTML = "";
  lines.forEach((line, i) => {
    const el = document.createElement("p");
    el.className = "boot-line";
    el.textContent = line;
    el.style.animationDelay = `${i * 150}ms`; // Snappy 150ms per line
    container.appendChild(el);
  });
}

function switchToDeveloper() {
  if (isAnimating) return;
  isAnimating = true;

  const overlay = document.getElementById("bootOverlay");
  const bootLines = document.getElementById("bootLines");
  
  // 1. Show overlay instantly (z-index 9999 guarantees no jitter/bleed-through)
  overlay.classList.add("boot-overlay-active");
  overlay.setAttribute("aria-hidden", "false");
  
  // 2. Type boot sequence
  typeBootSequence(bootLines, BOOT_LINES);
  
  // 3. Swap DOM content while screen is 100% covered
  setTimeout(() => {
    document.body.setAttribute("data-mode", "developer");
    renderAll("developer");
    setUpHeadingTypeEffect() ;
    document.getElementById("modeToggle").setAttribute("aria-pressed", "true");
  }, 100);

  // 4. Hide overlay after boot sequence finishes (100ms + 4 lines * 150ms + 150ms buffer = ~850ms total)
  setTimeout(() => {
    overlay.classList.remove("boot-overlay-active");
    overlay.setAttribute("aria-hidden", "true");
    isAnimating = false;
  }, 850);
}

function switchToRecruiter() {
  if (isAnimating) return;
  isAnimating = true;

  const main = document.querySelector("main");
  main.classList.add("mode-fade-out");

  setTimeout(() => {
    document.body.setAttribute("data-mode", "recruiter");
    renderAll("recruiter");
    document.getElementById("modeToggle").setAttribute("aria-pressed", "false");
    main.classList.remove("mode-fade-out");
    main.classList.add("mode-fade-in");
    setTimeout(() => {
      main.classList.remove("mode-fade-in");
      isAnimating = false;
    }, 250);
  }, 150);
}

function setUpToggle() {
  const toggle = document.getElementById("modeToggle");

  // Resume the glow only if this browser hasn't clicked it before
  if (localStorage.getItem("modeToggleSeen")) {
    toggle.classList.add("toggle-seen");
  }

  toggle.addEventListener("click", () => {
    localStorage.setItem("modeToggleSeen", "true");
    toggle.classList.add("toggle-seen");

    const current = document.body.getAttribute("data-mode");
    if (current === "recruiter") switchToDeveloper();
    else switchToRecruiter();
  });
}

/* ==========================================================================
   INIT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  document.body.setAttribute("data-mode", "recruiter");
  renderAll("recruiter");

  setUpContactForm();
  setUpToggle();
    setUpDevHintToggle();
  // setUpMouseTrail();
});