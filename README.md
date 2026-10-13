# APARUP'S PORTFOLIO — Code in the Shadows

A cinematic, Batman-inspired dark portfolio for **Aparup Santra** — Software Engineer & Data Analyst.

**Live:** https://aparup.xyz
**Repo:** https://github.com/Aparup321/portfolio

> I build web apps, mobile apps, and data-driven solutions. Focused on clean, efficient code and solving real-world problems.

## Preview

- Hero: `HI, I'M APARUP SANTRA` + live terminal
- About: `TURNING DATA INTO SOLUTIONS` + `ABOUT: APARUP` card
- Projects: `Selected Projects` grid
- Contact: `Let's collaborate` footer

Theme: Gotham black `#0a0505`, Batman red `#e61a1a`, Montserrat + Courier New mono, bat-signal motifs throughout.

## Features

**BATOS v2.5 Secure Terminal** (`js/terminal.js`)
- Boot sequence with typewriter effect
- Interactive commands: `help`, `whoami`, `skills`, `contact`, `system`, `matrix`, `joker`, `batman`, `batmobile`, `clear`
- ASCII Batmobile art, click-to-focus, auto-scroll

**Immersive FX**
- Red matrix digital rain overlay (`#matrix-canvas`, 15s breach via `matrix` command)
- Cursor spotlight + red tech scanner grid + targeting reticle with live `X: / Y:` coords
- Simulated System Integrity widget (CPU / GPU / MEM, updates every 3s)
- Project card title scramble / hacking hover effect
- Glitch hover on `.glitch-title`, floating bat-signal, CRT scanlines on terminal

**Content Sections** (`index.html`)
- Floating pill nav: `APARUP'S --- [logo] --- PORTFOLIO` + About / Projects / Contact
- Hero split layout with bat-signal SVG background
- About card: Data Viz (PowerBI), ML, Full-Stack, skills list, Recent Work (Health Mate, E-Commerce)
- 3 project cards: Health Mate, Historia 2.0, Batcomputer Portfolio
- Footer with email, Instagram, GitHub, `© 2026 APARUP SANTRA`

**Responsive (v2.6 mobile opts)**
- `<=1024px`: disables spotlight / grid / reticle, removes backdrop blur, reduces matrix density
- `<=900px`: single-column hero, stacked pill nav
- `<=600px`: scaled typography, full-width buttons, 280px terminal

## Tech Stack

- Vanilla HTML5 / CSS3 / JavaScript — no framework, no build step
- Fonts: Montserrat (Google Fonts) + Courier New mono
- Icons: Font Awesome 6.4.0 CDN
- Hosting: GitHub Pages + custom domain (`CNAME` → `aparup.xyz`)

## Project Structure

```
portfolio/
├── index.html          # Nav, hero, dossier, projects, footer
├── CNAME               # aparup.xyz (GitHub Pages custom domain)
├── styles/
│   └── main.css        # Theme, layout, terminal, FX, responsive (~874 lines)
├── js/
│   └── terminal.js     # Terminal, matrix, spotlight, vitals, scramble (~269 lines)
└── assets/images/
    ├── logo.png        # Nav logo (inverted + screen-blended via CSS)
    ├── batcave-bg.jpg  # Hero background
    ├── batmobile.png
    ├── blueprint.png
    ├── hero-bat-bg.png
    └── portrait.png
```

Only `logo.png` and `batcave-bg.jpg` are currently referenced in code. The other 4 images are unused assets.

## Terminal Commands

| Command | Output |
|---|---|
| `help` | List all commands |
| `whoami` | Dossier: Aparup Santra |
| `skills` | Data Viz / ML / Full-Stack |
| `contact` | GitHub + email |
| `system` | Vitals, Gotham Sector 7, Bat-Net v4.2 |
| `matrix` | 15s red digital rain + glitch overload (not recommended on low-end) |
| `joker` | `ACCESS DENIED. HA HA HA...` |
| `batman` | `I AM VENGEANCE. I AM THE NIGHT.` |
| `batmobile` | ASCII Batmobile |
| `clear` | Clear terminal |

## Getting Started

No dependencies. Clone and open:

```bash
git clone https://github.com/Aparup321/portfolio.git
cd portfolio
# Option 1: just open
xdg-open index.html
# Option 2: serve locally
python3 -m http.server 8000
# → http://localhost:8000
```

## Customization

- **Colors:** `:root` in `styles/main.css` — `--accent-red`, `--bg-dark`, `--panel-bg`
- **Terminal text:** `commands` + `bootLines` in `js/terminal.js`
- **Projects:** duplicate a `.card` block in `#work` in `index.html`
- **Bio/skills:** `.hero-card-content` dossier block in `#about-details`
- **Contact:** `mailto:` + `.footer-social-link` block in `#contact`
- **Vitals location label:** `.vitals-widget` `DST: GOTHAM CITY` in `index.html`
- **Logo blend:** `.main-logo-img` uses `filter: invert(1) contrast(200%)` + `mix-blend-mode: screen` to knock out the grey background

## Deployment

GitHub Pages, root deployment:

1. Push to `main` with `index.html` at root
2. Keep `CNAME` containing `aparup.xyz`
3. Repo Settings → Pages → Deploy from branch → `main` / `/ (root)`
4. DNS: `A` records to GitHub Pages IPs + `www` CNAME to `<user>.github.io`

## Contact

- Email: aparupsantra2004@gmail.com
- GitHub: https://github.com/Aparup321
- Instagram: https://www.instagram.com/aparup_321/
- Health Mate: https://github.com/Aparup321/health-mate-2.0
- Historia 2.0: https://github.com/Aparup321/historia-2.0

## License

© 2026 Aparup Santra. All rights reserved. No license file included — add one (e.g. MIT) if you want reuse to be allowed.
