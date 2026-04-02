document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('terminal-output');
    const input = document.getElementById('terminal-input');

    // Auto-focus terminal on click
    document.querySelector('.terminal-container').addEventListener('click', () => {
        input.focus();
    });

    const commands = {
        'help': 'AVAILABLE COMMANDS: \n> whoami\n> skills\n> contact\n> clear',
        'whoami': 'DOSSIER: APARUP SANTRA\nCLASSIFICATION: SOFTWARE ENGINEER & DATA ANALYST\nOBJECTIVE: Uncover insights. Build structural order from raw data.',
        'skills': 'CORE DIRECTIVES LOADED:\n- Data Visualization (PowerBI, Tableau)\n- Machine Learning (Predictive Models)\n- Full-Stack Web Development',
        'contact': 'INITIATE PROTOCOL:\nGITHUB: github.com/Aparup321\nEMAIL: gameraparup17@gmail.com\nSTATUS: Intercepting new opportunities.',
        'joker': 'ACCESS DENIED. HA HA HA.',
        'batman': 'I AM VENGEANCE.',
        'batmobile': '   _..-------++._\n  .-\'/_\'._\'_\'_.-.\'  `_`.\n  `|/` `|  __/  / )/ `_\\\n  /`\' . \'_._// / (_;=//\n /) _/ /    / _(   ) \\\n   \'\'\''
    };

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const val = input.value.trim().toLowerCase();
            if (val) {
                printLine(`> ${val}`, 'user-cmd');

                if (val === 'clear') {
                    output.innerHTML = '';
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

    function typeWriter(text, className) {
        const div = document.createElement('div');
        div.className = className;
        output.appendChild(div);

        let i = 0;
        const speed = 15; // ms per char

        function type() {
            if (i < text.length) {
                div.textContent += text.charAt(i);
                i++;
                scrollToBottom();
                setTimeout(type, speed);
            }
        }
        type();
    }

    function scrollToBottom() {
        const container = document.querySelector('.terminal-container');
        container.scrollTop = container.scrollHeight;
    }

    // Initial boot sequence
    setTimeout(() => {
        typeWriter('BATOS v2.4 initialized. Type "help" to view directories.', 'system-response');
    }, 500);
});
