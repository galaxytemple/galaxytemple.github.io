# Portfolio (galaxytemple.github.io)

Inspired by [isaacbernat.com/cv.html](https://www.isaacbernat.com/cv.html).  
A clean, minimal, and fast static portfolio built with **Vite + React + TypeScript** and pure **CSS Animations** (zero external animation library bloat).

Designed for direct hosting on **GitHub Pages** (`https://galaxytemple.github.io`).

---

## 🧭 Structure & Sections

1. **Header & Profile**: Name, subtitle, tagline, quick copy email button, social & email links, and light/dark theme toggle.
2. **Sticky Sub-Navigation**: Quick smooth-scroll navigation with active section indicator:
   - **Experience**: Accordion interface with `+` / `×` rotation micro-animations.
   - **Case Studies**: In-depth project cards with key metrics, overview, and expandable problem/solution/architecture breakdown.
   - **Projects**: Responsive grid showcasing side projects, tech tags, and code/live links.
   - **Education**: Minimal timeline cards detailing degree, institution, and achievements.
3. **Theme Support**: Warm cream light mode & deep warm dark mode with smooth CSS color transitions and FOUC prevention.

---

## 🛠️ How to Customize Your Content

All data is separated from UI logic. Simply edit:

👉 [`src/data/portfolioData.ts`](./src/data/portfolioData.ts)

- `profileData`: Name, title, email, LinkedIn, GitHub, Medium
- `experienceData`: Companies, roles, periods, achievements, tags
- `caseStudiesData`: Title, year, metrics, challenge, solution, architecture, results
- `projectsData`: Project title, description, tags, GitHub / demo links
- `educationData`: Schools, degrees, periods, highlights

---

## 🚀 Getting Started

### Local Development
```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```

### Production Build
```bash
npm run build
```
The output will be generated into the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

### Automatic Deployment (Recommended via GitHub Actions)
A workflow has been pre-configured in [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).

1. Go to your GitHub repository settings: **Settings > Pages**.
2. Under **Build and deployment > Source**, select **GitHub Actions**.
3. Push your code to the `main` or `master` branch:
   ```bash
   git add .
   git commit -m "feat: portfolio wireframe & design"
   git push origin main
   ```
4. GitHub Actions will automatically build and deploy your site to `https://galaxytemple.github.io`.
