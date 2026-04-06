<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" />
</p>
<h1 align="center">Saksham Tomer — Personal Portfolio</h1>

[![Site preview](/public/site-preview.png)](https://www.sakshamtomer.com)

My personal developer portfolio built from scratch to showcase my work as a Full-Stack and Agentic AI Developer. The site features an interactive 3D WebGL background, smooth page transitions, and deep-dive technical project writeups. 

Built with [Remix](https://remix.run/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/).

## Featured Projects

This repository contains the interactive case studies for my flagship projects:

1. **SolXPass**: A decentralized identity and access control platform built on Solana, leveraging the Reclaim Protocol to enable verifiable, cross-chain credentials. 
2. **merchandaise.com**: An advanced e-commerce platform featuring real-time 3D product visualization powered by WebGL and custom GLSL shaders.
3. **vim_terminal**: A blazing-fast Rust-powered TUI file explorer with complete vim keybindings and dual-pane navigation. Published on crates.io with 970+ downloads.

## Tech Stack

- **Framework**: [Remix](https://remix.run/)
- **3D Rendering**: [Three.js](https://threejs.org/) + Custom GLSL Shaders
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: PostCSS + Custom CSS Variables & Modules
- **Deployment**: Vercel / Cloudflare Pages 

## Install & Run Locally

Ensure you have Node.js version `19.9.0+` installed.

1. Clone the repository:
```bash
git clone https://github.com/saksham-tomer/agenticdevportfolio.git
cd agenticdevportfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the local development server:
```bash
npm run dev
```
The site will be available at `http://localhost:7777`.

## Architecture & Design Details

- **"Void Purple" Theme**: Custom dark mode gradient system mixing `#09090f` background colors with electric `#7c3aed` and `#a855f7` accents.
- **Dynamic Displacement Sphere**: The interactive background uses a Custom ShaderMaterial (`displacement-sphere-fragment.glsl`) to generate real-time geometry displacement based on Perlin noise, customized to output violet/indigo lighting.
- **Interactive Device Models**: The project features use laptop and phone 3D models populated with real textures and screenshots of the apps.

## Deployment

The project is zero-config ready for Vercel.

```bash
npx vercel --prod
```

## License

MIT License

Copyright (c) 2024 Saksham Tomer
