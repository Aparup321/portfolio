document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('terminal-output');
    const input = document.getElementById('terminal-input');

    // Auto-focus terminal on click
    document.querySelector('.terminal-container').addEventListener('click', () => {
        input.focus();
    });

    const commands = {
        'help': 'AVAILABLE COMMANDS: \n> whoami\n> skills\n> contact\n> system\n> matrix\n> joker\n> batman\n> batmobile\n> clear',
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
        printLine("INITIALIZING DIGITAL RAIN...", "system-response");
        setTimeout(() => {
            const matrixLines = [
                "0101010101010101010101",
                "1010110110101010101011",
                "SYSTEM OVERRIDE DETECTED",
                "DECRYPTING ENCRYPTION KEYS...",
                "ACCESS GRANTED TO GOTHAM-NET",
                "BAT-IDENTITY RECOVERED"
            ];
            let count = 0;
            const interval = setInterval(() => {
                printLine(matrixLines[Math.floor(Math.random() * matrixLines.length)], "system-response matrix-text");
                count++;
                if (count > 15) {
                    clearInterval(interval);
                    printLine("--- MATRIX DECOUPLED ---", "system-response");
                }
            }, 100);
        }, 500);
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

    // 1. Spotlight Tracking
    const spotlight = document.querySelector('.spotlight');
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        spotlight.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent 10%, rgba(10, 5, 5, 0.8) 40%)`;
    });

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

                iteration += 1 / 3;
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

