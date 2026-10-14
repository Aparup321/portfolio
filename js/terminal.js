document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('terminal-output');
    const input = document.getElementById('terminal-input');
    const isMobile = window.innerWidth <= 1024;

    // Auto-focus terminal on click
    document.querySelector('.terminal-container').addEventListener('click', () => {
        input.focus();
    });

    const commands = {
        'help': 'AVAILABLE COMMANDS: \n> whoami\n> skills\n> projects\n> experience\n> education\n> contact\n> resume\n> system\n> matrix\n> clear',
        'whoami': 'NAME: APARUP SANTRA\nROLE: SOFTWARE ENGINEER & DATA ANALYST\nFOCUS: Building data-driven solutions from complex datasets.',
        'skills': 'SKILLS:\n- Data Visualization (PowerBI, Tableau)\n- Machine Learning (Predictive Models)\n- Full-Stack Web Development\n- Python, SQL, TypeScript, React',
        'projects': 'PROJECTS:\n- Health Mate (TypeScript)\n- Historia 2.0 (Data Viz)\n- ESP Song Visualizer (Python + ESP32)\n- Crime Detection (ML, HDBSCAN)\n- Suggestion Website (React, live at aparup.me)\nSee #work section for links.',
        'experience': 'EXPERIENCE:\n- Health Mate app (TypeScript)\n- E-commerce storefront features\n- Data dashboards (PowerBI, SQL)\nSee #experience section for full timeline.',
        'education': 'EDUCATION:\n- MCA — Final Year Project: Crime Detection\n  Chicago crime data, HDBSCAN + ML forecasting.',
        'resume': 'RESUME:\nDownload at assets/resume.pdf\nOr email aparupsantra2004@gmail.com for latest copy.',
        'contact': 'CONTACT:\nGITHUB: github.com/Aparup321\nLINKEDIN: linkedin.com/in/aparup-santra-869a1743a\nEMAIL: aparupsantra2004@gmail.com\nSTATUS: Open to new opportunities.',
        'system': 'STATUS: ALL SYSTEMS NORMAL\nLOCATION: INDIA\nPORTFOLIO: v2.6\nNETWORK: SECURE',
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
                    typeWriter(commands[val], 'system-response');
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
        printLine("LOADING MATRIX EFFECT...", "system-response");
        printLine("RENDERING: DIGITAL RAIN v4.0", "system-response");

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
            printLine("EFFECT COMPLETE. CLEANING UP.", "system-response");
            printLine("SYSTEM RESTORED TO NORMAL.", "system-response");
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

    // Boot Sequence
    const bootLines = [
        "PORTFOLIO OS v2.6 LOADED...",
        "LOADING PROFILE...",
        "CHECKING SYSTEM...",
        "ALL SYSTEMS READY.",
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

    // 1. Hacking Scramble Hover Effect for Project Cards
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

