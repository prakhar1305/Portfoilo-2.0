/**
 * Prakhar Bhardwaj - Anime Developer Portfolio JavaScript
 * Features:
 *  - Canvas Reiatsu & Divergence Particle System
 *  - Web Audio API Anime Sound Synthesizer (Katana Slash, Nixie Click, Domain Resonance)
 *  - Steins;Gate Interactive Divergence Meter
 *  - Dynamic Typing Effect
 *  - Domain Architecture Modals (Jujutsu Kaisen: RoboDog, RoboWars, AlgoCraft, PyAutomate, AI Sensei)
 *  - One Piece Wanted Poster Modal (Prakhar Bhardwaj)
 *  - Anime Quote of Power Generator
 *  - 1-Click Email Clipboard Copy & Toast
 *  - Mobile Navigation Drawer & Smooth Scrolling
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DATA & CONSTANTS
  // =========================================================================
  const STUDENT_EMAIL = 'prakhar.26bcon2079@jecrc.edu.in';

  // Domain Expansion / Project Details
  const projectDetails = {
    robodog: {
      title: 'Domain: Divine Dog (RoboDog Autonomous Quadruped)',
      grade: 'SPECIAL GRADE ROBOTICS CURSED TECHNIQUE',
      category: 'Embedded C++ Robotics, Inverse Kinematics & Ultrasonic Mapping',
      github: 'https://github.com/prakhar1305',
      content: `
        <div class="space-y-3">
          <p>
            <strong>RoboDog</strong> is an autonomous 4-legged quadruped robotic platform engineered with 12 Degrees of Freedom (DOF), 
            inspired by Megumi Fushiguro's Divine Dog. The system merges mathematical Inverse Kinematics (IK) with embedded C++ firmware 
            running on high-speed microcontrollers.
          </p>
          <h4>Core Engineering Architecture</h4>
          <ul>
            <li><strong>Geometric Inverse Kinematics (IK):</strong> Mathematical trigonometric model written in C++ that computes precise 3-axis servo angles for coxa, femur, and tibia joints in real time to produce stable trot and crawl gaits.</li>
            <li><strong>Dynamic Center-of-Mass Stabilization:</strong> Real-time gait transition algorithms that shift center-of-mass to maintain static and dynamic equilibrium across varied indoor surfaces.</li>
            <li><strong>Ultrasonic / LiDAR Obstacle Mapping:</strong> Multi-sensor distance triangulation that triggers autonomous collision-avoidance subroutines without manual intervention.</li>
            <li><strong>Wireless Python Ground Telemetry:</strong> Transmits real-time battery voltage, roll/pitch/yaw IMU angles, and servo temperatures over Wi-Fi / Bluetooth to a custom Python desktop dashboard.</li>
          </ul>
          <div class="p-3 bg-slate-800/80 rounded border border-cyan-500/30 text-xs font-mono text-cyan-300">
            Pipeline: [IMU / Sensors] ➔ [IK Compute Core (C++)] ➔ [PCA9685 PWM Drivers] ➔ [Python Ground Telemetry]
          </div>
        </div>
      `
    },
    robowars: {
      title: 'Domain: Malevolent Shrine (RoboWars Combat Battlebot)',
      grade: 'SPECIAL GRADE COMBAT CURSED TECHNIQUE',
      category: 'High-Torque Combat Robotics, Brushless ESC & Fail-Safe Systems',
      github: 'https://github.com/prakhar1305',
      content: `
        <div class="space-y-3">
          <p>
            <strong>RoboWars Combat Bot</strong> is a heavy-duty, competitive battlebot engineered for collegiate RoboWars arenas. 
            Channeling Sukuna's Cleave and Dismantle, the machine is designed to deliver destructive kinetic impacts while absorbing massive counter-shockwaves.
          </p>
          <h4>Combat Systems & Electronic Architecture</h4>
          <ul>
            <li><strong>Kinetic Drum Weapon System:</strong> High-RPM hardened steel drum spinner driven by an ultra-high kV brushless outrunner motor, delivering immense joules of kinetic energy on impact.</li>
            <li><strong>High-Torque Dual Drive:</strong> Planetary geared DC motors driven by custom calibrated H-bridge ESCs, granting instantaneous zero-radius pivot steering and explosive evasive speed.</li>
            <li><strong>Fail-Safe RF Watchdog Firmware:</strong> Embedded C++ routine that monitors 2.4GHz PWM transmitter signal health, instantly cutting weapon and drive power within 50ms upon telemetry loss to comply with combat safety regulations.</li>
            <li><strong>LiPo Power Bus & Structural Isolation:</strong> Multi-cell high-discharge LiPo battery architecture with isolated optocoupled control lines preventing motor electromagnetic back-EMF spikes from resetting microcontroller logic.</li>
          </ul>
          <div class="p-3 bg-slate-800/80 rounded border border-rose-500/30 text-xs font-mono text-rose-300">
            Stack: [2.4GHz RF Receiver] ➔ [Fail-Safe Watchdog (C++)] ➔ [Optocoupled ESC Bus] ➔ [Kinetic Spinner + Dual Drive]
          </div>
        </div>
      `
    },
    algocraft: {
      title: 'Domain: Infinite Void (AlgoCraft Visualizer)',
      grade: 'GRADE 1 CURSED TECHNIQUE',
      category: 'C++ Systems Architecture & Algorithmic Complexity',
      github: 'https://github.com/prakhar1305',
      content: `
        <div class="space-y-3">
          <p>
            <strong>AlgoCraft</strong> is a high-performance C++ algorithmic analysis and visualization engine built using modern C++20 standards. 
            Much like Gojo's Infinite Void, it visualizes every state mutation, swap comparison, and CPU clock cycle across sorting algorithms in real time.
          </p>
          <h4>Core Architectural Innovations</h4>
          <ul>
            <li><strong>Polymorphic Compute Core:</strong> Implements pure virtual algorithm interfaces, allowing quick expansion to QuickSort, MergeSort, HeapSort, and RadixSort without rewriting visualization logic.</li>
            <li><strong>State Snapshot Buffer:</strong> Captures intermediate array permutations and swap pointers at microsecond intervals, enabling forward and backward stepping.</li>
            <li><strong>High-Resolution Benchmarking:</strong> Employs <code>std::chrono::high_resolution_clock</code> to compute exact CPU cycle duration against sorted, reversed, and pseudo-random distributions.</li>
            <li><strong>Modern C++ Memory Safety:</strong> Strictly zero raw pointer leaks; uses <code>std::unique_ptr</code> and RAII encapsulation.</li>
          </ul>
          <div class="p-3 bg-slate-800/80 rounded border border-cyan-500/30 text-xs font-mono text-cyan-300">
            Pipeline: [cli_interface.hpp] ➔ [engine_template.tpp] ➔ [state_recorder.cpp] ➔ [benchmark_suite.cpp]
          </div>
        </div>
      `
    },
    pyautomate: {
      title: 'Domain: Hollow Purple (PyAutomate Suite)',
      grade: 'GRADE 1 CURSED TECHNIQUE',
      category: 'Python Automation, OS Pipelines & Daily Feed Synthesis',
      github: 'https://github.com/prakhar1305',
      content: `
        <div class="space-y-3">
          <p>
            <strong>PyAutomate</strong> was built during Prakhar's first weeks of mastering Python. It combines operating system automation with 
            academic timetable parsing and an automated morning tech headline scraper.
          </p>
          <h4>Key Functional Modules</h4>
          <ul>
            <li><strong>Coursework File Classifier:</strong> Monitors default download directories using <code>os</code> and <code>pathlib</code>, instantly categorizing lecture slides, assignments, and lab records into structured semester folders.</li>
            <li><strong>University Timetable Dispatcher:</strong> Parses a local JSON schedule and fires system notifications 15 minutes before engineering lecture blocks.</li>
            <li><strong>Daily Tech Brief Scraper:</strong> Fetches top stories from developer forums and tech APIs to compile a morning markdown briefing directly into your study workspace.</li>
          </ul>
          <div class="p-3 bg-slate-800/80 rounded border border-purple-500/30 text-xs font-mono text-purple-300">
            Flow: [File Watcher] ➔ [MIME Regex Parser] ➔ [JSON Schedule Engine] ➔ [Desktop Toast Alert]
          </div>
        </div>
      `
    },
    nexai: {
      title: 'Domain: Idle Death Gamble (AI Code Sensei)',
      grade: 'GRADE 1 CURSED TECHNIQUE',
      category: 'AI Prompt Engineering & Pedagogical Developer Tool',
      github: 'https://github.com/prakhar1305',
      content: `
        <div class="space-y-3">
          <p>
            <strong>AI Code Sensei</strong> is an experimental prompt engineering scaffold and Python assistant designed to demystify complex C++ memory concepts, pointers, and Python data abstractions for junior engineering peers.
          </p>
          <h4>Pedagogical & Technical Structure</h4>
          <ul>
            <li><strong>Socratic Metaphor Scaffolding:</strong> Structured few-shot prompts that anchor abstract pointer arithmetic to physical real-world storage lockers and post-office addresses.</li>
            <li><strong>Side-by-Side Dual Syntax Generator:</strong> Highlights identical logic rendered in strict low-level C++ versus high-level expressive Python.</li>
            <li><strong>Export Engine:</strong> Formats generated concept explanations into ready-to-use Markdown cheat-sheets for Notion or Obsidian.</li>
          </ul>
          <div class="p-3 bg-slate-800/80 rounded border border-amber-500/30 text-xs font-mono text-amber-300">
            Pattern: [Bug Input] ➔ [Socratic Deconstructor] ➔ [Memory Diagram Generator] ➔ [Self-Test Quiz]
          </div>
        </div>
      `
    }
  };

  // Anime Quotes of Power
  const animeQuotes = [
    { text: "No one knows what the future holds. That's why its potential is infinite.", author: "Rintaro Okabe // Steins;Gate" },
    { text: "If you don't take risks, you can't create a future!", author: "Monkey D. Luffy // One Piece" },
    { text: "My magic is never giving up!", author: "Asta // Black Clover" },
    { text: "Don't fear failure. Even when you fall, your spirit continues forward.", author: "Ichigo Kurosaki // Bleach" },
    { text: "Throughout heaven and earth, I alone am the honored one.", author: "Satoru Gojo // Jujutsu Kaisen" },
    { text: "Surpass your limits. Right here, right now.", author: "Yami Sukehiro // Black Clover" },
    { text: "Whatever you lose, you'll find it again. But what you throw away you'll never get back.", author: "Kenshin Himura // Rurouni Kenshin" },
    { text: "Believing in yourself... that is the power to turn dreams into reality.", author: "Satoru Fujinuma // Erased" },
    { text: "Fear is not evil. It tells you what your weakness is. Once you know your weakness, you can become stronger.", author: "Gildarts Clive // Fairy Tail" }
  ];

  // Steins;Gate Alternate Worldlines
  const worldlines = [
    { value: '1.048596%', desc: 'Steins Gate (Ideal Reality - Divergence Solved)', status: 'Unlocked' },
    { value: '0.571024%', desc: 'Alpha Worldline (SERN Dystopia Avoided)', status: 'Shifted' },
    { value: '1.130426%', desc: 'Beta Worldline (World War III Prevented)', status: 'Shifted' },
    { value: '2.615074%', desc: 'Gamma Worldline (Alternate Future Unlocked)', status: 'Shifted' },
    { value: '0.000000%', desc: 'Divergence Zero (Convergence Point)', status: 'Unstable' }
  ];
  let currentWorldlineIndex = 0;


  // =========================================================================
  // 2. WEB AUDIO API SYNTHESIZER (No external MP3s needed)
  // =========================================================================
  let audioCtx = null;
  let isSoundEnabled = localStorage.getItem('anime_sound_enabled') !== 'false';

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Katana Slash / Bankai Chime
  function playKatanaSlash() {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      
      osc.type = 'sawtooth';
      const now = audioCtx.currentTime;
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(150, now + 0.18);
      
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.2);
    } catch (e) {
      // Audio fallback silent
    }
  }

  // Steins;Gate Nixie Tube Click
  function playNixieClick() {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const now = audioCtx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1200, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.08);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {}
  }

  // Jujutsu Kaisen Domain Resonance (Deep Bass)
  function playDomainExpansion() {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const now = audioCtx.currentTime;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.45);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + 0.5);
    } catch (e) {}
  }

  // Success Harmonic Chime
  function playSuccessChime() {
    if (!isSoundEnabled) return;
    try {
      initAudio();
      if (!audioCtx) return;
      const now = audioCtx.currentTime;
      [523.25, 659.25, 783.99].forEach((freq, idx) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.12, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.25);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.25);
      });
    } catch (e) {}
  }

  // Sound Toggle Handler
  const soundToggleBtn = document.getElementById('sound-toggle');
  const soundIcon = document.getElementById('sound-icon');
  const soundIndicator = soundToggleBtn ? soundToggleBtn.querySelector('.sound-indicator') : null;

  function updateSoundUI() {
    if (isSoundEnabled) {
      if (soundIcon) soundIcon.className = 'ri-volume-up-line';
      if (soundIndicator) { soundIndicator.classList.add('on'); soundIndicator.classList.remove('off'); }
      if (soundToggleBtn) soundToggleBtn.title = 'Sound FX: ON (Click to Mute)';
    } else {
      if (soundIcon) soundIcon.className = 'ri-volume-mute-line';
      if (soundIndicator) { soundIndicator.classList.add('off'); soundIndicator.classList.remove('on'); }
      if (soundToggleBtn) soundToggleBtn.title = 'Sound FX: MUTED (Click to Enable)';
    }
  }
  updateSoundUI();

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      isSoundEnabled = !isSoundEnabled;
      localStorage.setItem('anime_sound_enabled', isSoundEnabled);
      updateSoundUI();
      if (isSoundEnabled) {
        initAudio();
        playSuccessChime();
        showToast('Anime Audio: ON');
      } else {
        showToast('Anime Audio: Muted');
      }
    });
  }


  // =========================================================================
  // 3. BACKGROUND CANVAS PARTICLE ENGINE (Reiatsu & Divergence Sparks)
  // =========================================================================
  const canvas = document.getElementById('ambient-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 22), 65);
    const colors = ['#38bdf8', '#f43f5e', '#fbbf24', '#a855f7'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45 - 0.2, // subtle upward drift like spiritual pressure
        alpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.005
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += Math.sin(Date.now() * p.pulseSpeed) * 0.008;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(0.7, p.alpha));
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      });

      requestAnimationFrame(animateParticles);
    }
    animateParticles();
  }


  // =========================================================================
  // 4. DYNAMIC TYPING EFFECT
  // =========================================================================
  const typedTextEl = document.getElementById('typed-text');
  if (typedTextEl) {
    const phrases = [
      "1st-Year B.Tech CSE @ JECRC University",
      "RoboDog & RoboWars Builder (C++ Robotics)",
      "Low-Level Sorcerer (C & C++ Master)",
      "Agile Automator & Scripting in Python",
      "Curious Explorer of Modern AI Tools",
      "Lab Member 008 // Future Software Architect"
    ];

    let phraseIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let typeSpeed = 80;

    function typeLoop() {
      const currentPhrase = phrases[phraseIdx];

      if (isDeleting) {
        typedTextEl.textContent = currentPhrase.substring(0, charIdx - 1);
        charIdx--;
        typeSpeed = 35;
      } else {
        typedTextEl.textContent = currentPhrase.substring(0, charIdx + 1);
        charIdx++;
        typeSpeed = 85;
      }

      if (!isDeleting && charIdx === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2000; // Pause at end of phrase
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        typeSpeed = 400; // Pause before next phrase
      }

      setTimeout(typeLoop, typeSpeed);
    }
    typeLoop();
  }


  // =========================================================================
  // 5. STEINS;GATE DIVERGENCE METER INTERACTION
  // =========================================================================
  const nixieDisplay = document.getElementById('nixie-display');
  const rerollWorldlineBtn = document.getElementById('reroll-worldline');
  const miniDivergence = document.getElementById('mini-divergence');
  const divergenceTrigger = document.getElementById('divergence-trigger');

  function shiftWorldline() {
    playNixieClick();
    currentWorldlineIndex = (currentWorldlineIndex + 1) % worldlines.length;
    const target = worldlines[currentWorldlineIndex];

    if (nixieDisplay) {
      const tubes = nixieDisplay.querySelectorAll('.nixie-tube:not(.dot) .digit');
      const chars = target.value.replace('.', '').replace('%', '').split('');

      // Scramble flicker effect
      tubes.forEach((t, i) => {
        let flickers = 0;
        const interval = setInterval(() => {
          t.textContent = Math.floor(Math.random() * 10);
          flickers++;
          if (flickers > 6) {
            clearInterval(interval);
            t.textContent = chars[i] || '0';
          }
        }, 30);
      });
    }

    if (miniDivergence) {
      miniDivergence.textContent = target.value;
    }

    showToast(`Divergence Shifted: ${target.value} // ${target.status}`);
  }

  if (rerollWorldlineBtn) rerollWorldlineBtn.addEventListener('click', shiftWorldline);
  if (divergenceTrigger) divergenceTrigger.addEventListener('click', shiftWorldline);


  // =========================================================================
  // 6. BANKAI TRIGGER & HERO ACTION EFFECTS
  // =========================================================================
  const btnBankai = document.getElementById('btn-bankai');
  if (btnBankai) {
    btnBankai.addEventListener('click', () => {
      playKatanaSlash();
    });
  }


  // =========================================================================
  // 7. ONE PIECE WANTED BOUNTY POSTER MODAL (Strictly Prakhar Bhardwaj)
  // =========================================================================
  const modalWanted = document.getElementById('modal-wanted');
  const modalWantedBackdrop = document.getElementById('modal-wanted-backdrop');
  const modalWantedClose = document.getElementById('modal-wanted-close');
  const btnOpenWanted = document.getElementById('btn-open-wanted');
  const btnBountyQuick = document.getElementById('btn-bounty-quick');
  const wantedPosterPreview = document.getElementById('wanted-poster-preview');

  function openWantedModal() {
    playKatanaSlash();
    if (modalWanted) {
      modalWanted.hidden = false;
      document.body.style.overflow = 'hidden';
    }
  }

  function closeWantedModal() {
    if (modalWanted) {
      modalWanted.hidden = true;
      document.body.style.overflow = '';
    }
  }

  if (btnOpenWanted) btnOpenWanted.addEventListener('click', openWantedModal);
  if (btnBountyQuick) btnBountyQuick.addEventListener('click', openWantedModal);
  if (wantedPosterPreview) wantedPosterPreview.addEventListener('click', openWantedModal);
  if (modalWantedBackdrop) modalWantedBackdrop.addEventListener('click', closeWantedModal);
  if (modalWantedClose) modalWantedClose.addEventListener('click', closeWantedModal);


  // =========================================================================
  // 8. JJK DOMAIN EXPANSION / PROJECT ARCHITECTURE MODAL
  // =========================================================================
  const modalProject = document.getElementById('modal-project');
  const modalProjectBackdrop = document.getElementById('modal-project-backdrop');
  const modalProjectClose = document.getElementById('modal-project-close');
  const modalProjectDismiss = document.getElementById('modal-project-dismiss');
  const modalProjectTitle = document.getElementById('modal-project-title');
  const modalProjectCategory = document.getElementById('modal-project-category');
  const modalProjectBadge = document.getElementById('modal-project-badge');
  const modalProjectBody = document.getElementById('modal-project-body');
  const modalProjectGithub = document.getElementById('modal-project-github');

  const domainViewButtons = document.querySelectorAll('.btn-domain-view');

  function openProjectModal(projectId) {
    const data = projectDetails[projectId];
    if (!data) return;

    playDomainExpansion();

    if (modalProjectTitle) modalProjectTitle.textContent = data.title;
    if (modalProjectCategory) modalProjectCategory.textContent = data.category;
    if (modalProjectBadge) modalProjectBadge.textContent = data.grade;
    if (modalProjectBody) modalProjectBody.innerHTML = data.content;
    if (modalProjectGithub) modalProjectGithub.href = data.github || 'https://github.com/prakhar1305';

    if (modalProject) {
      modalProject.hidden = false;
      document.body.style.overflow = 'hidden';
    }
  }

  function closeProjectModal() {
    if (modalProject) {
      modalProject.hidden = true;
      document.body.style.overflow = '';
    }
  }

  domainViewButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const proj = btn.getAttribute('data-project');
      if (proj) openProjectModal(proj);
    });
  });

  if (modalProjectBackdrop) modalProjectBackdrop.addEventListener('click', closeProjectModal);
  if (modalProjectClose) modalProjectClose.addEventListener('click', closeProjectModal);
  if (modalProjectDismiss) modalProjectDismiss.addEventListener('click', closeProjectModal);


  // =========================================================================
  // 9. ESCAPE KEY MODAL HANDLER
  // =========================================================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeWantedModal();
      closeProjectModal();
      closeMobileMenu();
    }
  });


  // =========================================================================
  // 10. ANIME QUOTE GENERATOR
  // =========================================================================
  const quoteTextEl = document.getElementById('anime-quote-text');
  const quoteAuthorEl = document.getElementById('anime-quote-author');
  const btnNextQuote = document.getElementById('btn-next-quote');
  let currentQuoteIndex = 0;

  function renderNextQuote() {
    playNixieClick();
    currentQuoteIndex = (currentQuoteIndex + 1) % animeQuotes.length;
    const q = animeQuotes[currentQuoteIndex];

    if (quoteTextEl && quoteAuthorEl) {
      quoteTextEl.style.opacity = '0';
      quoteAuthorEl.style.opacity = '0';
      setTimeout(() => {
        quoteTextEl.textContent = `"${q.text}"`;
        quoteAuthorEl.textContent = `— ${q.author}`;
        quoteTextEl.style.opacity = '1';
        quoteAuthorEl.style.opacity = '1';
      }, 200);
    }
  }

  if (btnNextQuote) btnNextQuote.addEventListener('click', renderNextQuote);


  // =========================================================================
  // 11. 1-CLICK EMAIL CLIPBOARD COPY & TOAST
  // =========================================================================
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout = null;

  function showToast(message) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  function copyEmailToClipboard() {
    navigator.clipboard.writeText(STUDENT_EMAIL).then(() => {
      playSuccessChime();
      showToast('Copied JECRC Student Email to Clipboard!');
    }).catch(() => {
      // Fallback
      showToast(STUDENT_EMAIL);
    });
  }

  const copyEmailCard = document.getElementById('copy-email-card');
  const heroCopyEmail = document.getElementById('hero-copy-email');

  if (copyEmailCard) copyEmailCard.addEventListener('click', copyEmailToClipboard);
  if (heroCopyEmail) heroCopyEmail.addEventListener('click', copyEmailToClipboard);


  // =========================================================================
  // 12. CONTACT TRANSMISSION FORM DISPATCHER
  // =========================================================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const topicSelect = document.getElementById('form-topic');
      const msgInput = document.getElementById('form-message');

      let isValid = true;

      // Validation
      if (!nameInput.value.trim()) {
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('name-error').style.display = 'none';
      }

      if (!emailInput.value.trim() || !emailInput.value.includes('@')) {
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('email-error').style.display = 'none';
      }

      if (!msgInput.value.trim()) {
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
      } else {
        document.getElementById('message-error').style.display = 'none';
      }

      if (!isValid) return;

      playSuccessChime();

      // Construct Mailto URI
      const subject = encodeURIComponent(`[Portfolio Dispatch - ${topicSelect.value}] Message from ${nameInput.value}`);
      const body = encodeURIComponent(
        `Name/Codename: ${nameInput.value}\nContact Email: ${emailInput.value}\nTopic: ${topicSelect.value}\n\nMessage:\n${msgInput.value}\n\n---\nSent from Prakhar Bhardwaj Anime Portfolio`
      );
      const mailtoUri = `mailto:${STUDENT_EMAIL}?subject=${subject}&body=${body}`;

      showToast('Transmission Dispatched! Opening Mail Client...');
      
      setTimeout(() => {
        window.location.href = mailtoUri;
      }, 700);

      contactForm.reset();
    });
  }


  // =========================================================================
  // 13. MOBILE MENU DRAWER & ACTIVE NAV OBSERVER
  // =========================================================================
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileMenu() {
    playNixieClick();
    if (mobileMenu) mobileMenu.classList.add('open');
  }

  function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.remove('open');
  }

  if (menuToggle) menuToggle.addEventListener('click', openMobileMenu);
  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Active Nav Link on Scroll
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.nav-links .nav-link');

  window.addEventListener('scroll', () => {
    let currentId = '';
    const scrollY = window.pageYOffset;

    sections.forEach((sec) => {
      const secTop = sec.offsetTop - 120;
      const secHeight = sec.offsetHeight;
      if (scrollY >= secTop && scrollY < secTop + secHeight) {
        currentId = sec.getAttribute('id');
      }
    });

    desktopNavLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  });

});
