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

Theme: dark `#0a0505`, red accent `#e61a1a`, Montserrat + Courier New mono.

## Features

**Portfolio Terminal** (`js/terminal.js`)
- Boot sequence with typewriter effect
- Interactive commands: `help`, `whoami`, `skills`, `projects`, `experience`, `education`, `contact`, `resume`, `system`, `matrix`, `clear`
- Click-to-focus, auto-scroll

**Enhancements** (`js/enhancements.js`)
- Scroll-reveal for cards / timeline, nav shrink on scroll, back-to-top button
- Respects `prefers-reduced-motion`

**Immersive FX**
- Red matrix digital rain overlay (`#matrix-canvas`, 15s effect via `matrix` command)
- Project card title scramble / hacking hover effect
- Glitch hover on `.glitch-title`, floating bat-signal, CRT scanlines on terminal

**Content Sections** (`index.html`)
- Floating pill nav: `APARUP'S --- [logo] --- PORTFOLIO` + About / Experience / Projects / Contact
- Hero split layout with bat-signal SVG background + CTAs (View Projects / Download Resume / Hire Me)
- About card: Data Viz (PowerBI), ML, Full-Stack, skills list, Recent Work + portrait (`portrait.jpg`, lazy-loaded)
- Experience & Education timeline (`#experience`)
- 6 project cards with gradient thumbnails: Health Mate, Historia 2.0, Personal Portfolio, ESP Song Visualizer, Crime Detection, Suggestion Website
- Contact footer with copy-email button + mailto form, email, Instagram, GitHub, LinkedIn

**Responsive (v2.7 mobile opts)**
- `<=1024px`: removes backdrop blur, reduces matrix density
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
├── index.html          # Nav, hero, about, experience, projects, footer
├── CNAME               # aparup.xyz (GitHub Pages custom domain)
├── manifest.webmanifest # PWA manifest
├── robots.txt / sitemap.xml / 404.html
├── .gitignore / .env.example / .well-known/security.txt
├── styles/
│   └── main.css        # Theme, layout, terminal, FX, responsive
├── js/
│   ├── terminal.js     # Terminal, matrix, scramble (v2.6 commands)
│   └── enhancements.js # Scroll-reveal, nav shrink, back-to-top
└── assets/
    ├── resume.pdf      # Real resume (replace to update)
    └── images/
        ├── logo.png        # Nav logo (inverted + screen-blended via CSS)
        ├── batcave-bg.jpg  # Hero background (1920px, compressed)
        └── portrait.jpg    # About portrait (600px, lazy-loaded)
```

Images optimized v2.7: hero 3840px→1920px (~157KB), portrait PNG→JPG 600px (~43KB). Removed unused `batmobile.png`, `blueprint.png`, `hero-bat-bg.png`.

## Terminal Commands

| Command | Output |
|---|---|
| `help` | List all commands |
| `whoami` | Name, role, focus |
| `skills` | Data Viz / ML / Full-Stack |
| `projects` | Project list |
| `experience` | Work summary |
| `education` | MCA + Crime Detection |
| `resume` | Resume download path |
| `contact` | GitHub + LinkedIn + email |
| `system` | Status, location, portfolio version (v2.6) |
| `matrix` | 15s red digital rain + glitch effect |
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
- **Bio/skills:** `.hero-card-content` about block in `#about-details`
- **Contact:** `mailto:` + `.footer-social-link` block in `#contact`
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
- LinkedIn: https://www.linkedin.com/in/aparup-santra-869a1743a/
- Health Mate: https://github.com/Aparup321/health-mate-2.0
- Historia 2.0: https://github.com/Aparup321/historia-2.0

## License

© 2026 Aparup Santra. MIT — see `LICENSE`.
