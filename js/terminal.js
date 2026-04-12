document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('terminal-output');
    const input = document.getElementById('terminal-input');
    const isMobile = window.innerWidth <= 1024;

    // Auto-focus terminal on click
    document.querySelector('.terminal-container').addEventListener('click', () => {
        input.focus();
    });

    const commands = {
        'help': 'AVAILABLE COMMANDS: \n> whoami\n> skills\n> contact\n> system\n> matrix     not recomended\n> joker\n> batman\n> batmobile\n> clear',
        'whoami': 'DOSSIER: APARUP SANTRA\nCLASSIFICATION: SOFTWARE ENGINEER & DATA ANALYST\nOBJECTIVE: Uncover insights. Build structural order from raw data.',
        'skills': 'CORE DIRECTIVES LOADED:\n- Data Visualization (PowerBI, Tableau)\n- Machine Learning (Predictive Models)\n- Full-Stack Web Development\n- Tactical Problem Solving',
        'contact': 'INITIATE PROTOCOL:\nGITHUB: github.com/Aparup321\nEMAIL: gameraparup17@gmail.com\nSTATUS: Intercepting new opportunities.',
        'system': 'VITAL SIGNS: OPTIMAL\nLOCATION: GOTHAM CITY SECTOR 7\nBAT-SUIT: INTEGRITY 98%\nBATMOBILE: OFFLINE (CHARGING)\nNETWORK: SECURE BAT-NET v4.2',
        'joker': 'ACCESS DENIED. HA HA HA. \nI\'m not a monster, I\'m just ahead of the curve.',
        'batman': 'I AM VENGEANCE. I AM THE NIGHT.',
        'batmobile': '   _..-------++._\n  .-\'/_\'._\'_\'_.-.\'  `_`.\n  `|/` `|  __/  / )/ `_\\\n  /`\' . \'_._// / (_;=//\n /) _/ /    / _(   ) \\\n   \'\'\''
    };

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const val = input.value.trim().toLowerCase();
            if (val) {
                printLine(`> ${val}`, 'user-cmd');

                if (val === 'clear') {
                    output.innerHTML = '';
                } else if (val === 'matrix') {
                    startMatrix();
                } else if (commands[val]) {
                    if (val === 'batmobile') {
                        printLine(commands[val], 'system-response true-ascii');
                    } else {
                        typeWriter(commands[val], 'system-response');
                    }
                } else {
                    printLine(`COMMAND NOT RECOGNIZED: ${val}`, 'error-cmd');
                }
            }
            input.value = '';
        }
    });

    function printLine(text, className) {
        const div = document.createElement('div');
        div.className = className;
        div.textContent = text;
        output.appendChild(div);
        scrollToBottom();
    }

    function typeWriter(text, className, callback) {
        const div = document.createElement('div');
        div.className = className;
        output.appendChild(div);

        let i = 0;
        const speed = 10; // ms per char (faster for better feel)

        function type() {
            if (i < text.length) {
                div.textContent += text.charAt(i);
                i++;
                scrollToBottom();
                setTimeout(type, speed);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    function startMatrix() {
        printLine("INITIATING SYSTEM BREACH...", "system-response");
        printLine("INJECTING PAYLOAD: DIGITAL RAIN v4.0", "system-response");

        const canvas = document.getElementById('matrix-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const body = document.body;

        // Activate global styles
        body.classList.add('matrix-active');

        // Setup Canvas
        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        const fontSize = isMobile ? 24 : 16; // Larger font = fewer columns on mobile
        const columns = canvas.width / fontSize;
        const drops = [];
        for (let x = 0; x < columns; x++) drops[x] = 1;

        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*".split("");

        function draw() {
            // Semi-transparent black to create trailing effect
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#ff1a1a"; // Batman Red
            ctx.font = fontSize + "px Courier New";

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }


        const matrixInterval = setInterval(draw, 33);

        // Cleanup after 15 seconds
        setTimeout(() => {
            clearInterval(matrixInterval);
            body.classList.remove('matrix-active');
            printLine("BREACH DISPATCHED. CLEANUP COMPLETE.", "system-response");
            printLine("SYSTEM RESTORED TO OPTIMAL STATE.", "system-response");
            canvas.style.opacity = '0';
            setTimeout(() => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                window.removeEventListener('resize', resize);
            }, 1000);
        }, 15000);
    }


    function scrollToBottom() {
        const container = document.querySelector('.terminal-container');
        container.scrollTop = container.scrollHeight;
    }

    // Immersive Boot Sequence
    const bootLines = [
        "BATOS v2.5 KERNEL LOADED...",
        "AUTHENTICATING VIGILANTE CREDENTIALS...",
        "SCANNING GOTHAM CITY SECTORS...",
        "WEATHER: HEAVY RAIN / VISIBILITY: LOW",
        "ALL SYSTEMS NOMINAL. READY FOR DARKNESS.",
        "Type 'help' to begin."
    ];

    function runBoot(index) {
        if (index < bootLines.length) {
            typeWriter(bootLines[index], 'system-response', () => {
                setTimeout(() => runBoot(index + 1), 300);
            });
        }
    }

    // Delay start for dramatic effect
    setTimeout(() => runBoot(0), 1000);

    // --- NEW CUSTOMIZATIONS (v2.5) ---
    // (v2.6 Optimizations for Mobile)

    // 1. Spotlight Tracking with Throttling
    const spotlight = document.querySelector('.spotlight');
    const reticleCoords = document.querySelector('.reticle-coords');
    let ticking = false;

    document.addEventListener('mousemove', (e) => {
        // Optimization: Don't process if HUD is hidden (mobile)
        if (window.innerWidth <= 1024) return;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                const xPercent = (e.clientX / window.innerWidth) * 100;
                const yPercent = (e.clientY / window.innerHeight) * 100;

                document.documentElement.style.setProperty('--mouse-x', `${xPercent}%`);
                document.documentElement.style.setProperty('--mouse-y', `${yPercent}%`);
                document.documentElement.style.setProperty('--mouse-x-px', `${e.clientX}px`);
                document.documentElement.style.setProperty('--mouse-y-px', `${e.clientY}px`);

                if (reticleCoords) {
                    reticleCoords.textContent = `X: ${Math.floor(xPercent).toString().padStart(3, '0')} Y: ${Math.floor(yPercent).toString().padStart(3, '0')}`;
                }
                ticking = false;
            });
            ticking = true;
        }
    });

    // Modified Matrix density for performance
    const originalStartMatrix = startMatrix;
    startMatrix = function () {
        // Use a modified drop count if on mobile
        const isMobile = window.innerWidth <= 1024;
        const matrixCanvas = document.getElementById('matrix-canvas');
        if (matrixCanvas) {
            // We'll let the original function run but we can tweak drops if needed
            // By overriding resize we can control columns
        }
        originalStartMatrix();
    };


    // 2. Vitals Simulation

    function updateVitals() {
        const cpu = (Math.random() * 5 + 1).toFixed(1);
        const gpu = (Math.random() * 3 + 0.5).toFixed(1);
        const mem = (Math.random() * 0.5 + 4.5).toFixed(1);

        const cpuEl = document.getElementById('vital-cpu');
        const gpuEl = document.getElementById('vital-gpu');
        const memEl = document.getElementById('vital-mem');

        if (cpuEl) cpuEl.textContent = `${cpu}%`;
        if (gpuEl) gpuEl.textContent = `${gpu}%`;
        if (memEl) memEl.textContent = `${mem}GB`;
    }
    setInterval(updateVitals, 3000);

    // 3. Hacking Scramble Hover Effect for Project Cards
    const cards = document.querySelectorAll('.card');
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

    cards.forEach(card => {
        const header = card.querySelector('.card-header');
        if (!header) return;
        const originalText = header.textContent;
        let interval = null;

        card.addEventListener('mouseenter', () => {
            let iteration = 0;
            clearInterval(interval);

            interval = setInterval(() => {
                header.textContent = originalText
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return originalText[index];
                        }
                        return charset[Math.floor(Math.random() * charset.length)];
                    })
                    .join("");

                if (iteration >= originalText.length) {
                    clearInterval(interval);
                }

                iteration += 1;
            }, 30);
            header.classList.add('scramble-flicker');
        });

        card.addEventListener('mouseleave', () => {
            clearInterval(interval);
            header.textContent = originalText;
            header.classList.remove('scramble-flicker');
        });
    });
});

