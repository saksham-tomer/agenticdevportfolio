---
name: Architecture Summary
description: High-level overview of the project structure, primary technologies, and data flow patterns.
type: project
---

## Architectural Analysis: Portfolio Application

### I. High-Level Structure Overview

The repository follows a standard modern web structure heavily influenced by **Remix**, indicating a unified structure for both server-side rendering (SSR) and client-side interactivity.

| Directory/File | Purpose | Concerns Handled |
| :--- | :--- | :--- |
| `app/` | **Assets & Media:** Stores all raw, large, and complex media assets. | Visual Content (Images, 3D Models, Fonts, Shaders). |
| `public/` | **Static Assets:** Stores assets accessible directly at the root URL. | Site metadata (`robots.txt`, `sitemap.xml`), basic icons, and optimized 3D model assets (Draco format). |
| `scripts/` | **Build & Utility:** Contains helper scripts for pre-build tasks. | Build Pipeline Tasks (e.g., `draco.cjs` for model optimization). |
| `src/` (Implied/Remix Routes) | **Application Logic:** (The main application structure, inferred from Remix/Vite setup). | Page components, UI logic, data fetching. |
| `vite.config.js` | **Build Configuration:** Orchestrates the entire build process. | Bundling, Asset Processing, Plugin Management (MDX, Remix). |
| `wrangler.toml` | **Deployment Configuration:** Targets the deployment environment. | Edge/Serverless Function configuration (Cloudflare Workers/Pages). |

### II. Concerns Handled by Major Directories

#### 1. Presentation & Assets (`app/`, `public/`)
This is the repository's visual and content layer.
*   **3D/WebGL:** The heavy usage of files in `app/assets/` (e.g., `.glb`, `.hdr`, `.glsl` shaders) confirms a primary concern with **real-time, interactive 3D visualization**. The shaders (`.glsl`) are critical, as they govern the dynamic background effects (e.g., the "Void Purple" displacement sphere).
*   **Styling:** The use of PostCSS suggests a structured approach to styling, likely involving global theme management and modular component styling.
*   **Content:** The `README.md` and the general asset structure indicate a "showcase" nature, where projects are deep-dived with rich media.

#### 2. Application Logic & Routing (Inferred from Remix/Vite)
The core application logic, while not fully visible, is managed by Remix patterns.
*   **Full-Stack Capabilities:** Remix allows handling data fetching on the server *and* rendering components on the client, meaning the application handles **data persistence and rendering** across the stack.
*   **Content Authoring:** The inclusion of `@mdx-js/react` and `remark-mdx-frontmatter` implies that **content pages are written in MDX**, which allows developers to seamlessly embed React components and 3D visualizations directly within Markdown documentation, perfect for project writeups.

#### 3. Backend & Deployment (`wrangler.toml`, Dependencies)
*   **Edge Computing:** `wrangler.toml` ties the project to **Cloudflare Workers/Pages**, defining how the application is deployed and potentially how serverless APIs are exposed.
*   **Interoperability:** The dependency on `@aws-sdk/client-ses` suggests that while deployed on Cloudflare (potentially), the underlying backend *can* interact with external cloud services like AWS SES for actions like sending emails/verifications.
*   **Asset Optimization:** Scripts like `scripts/draco.cjs` indicate an active concern with **asset performance**, specifically optimizing complex 3D models for web delivery.

### III. Primary Data Flow

The data flow is highly iterative, moving from definition to asset preparation, to rendering, and finally to deployment.

1.  **Definition $\rightarrow$ Assets:**
    *   **Source:** Project concepts are defined by content written in **MDX** files (the "What" and "Why").
    *   **Asset Generation:** Large assets (3D models, high-res textures) are created and placed in `app/assets/`.
    *   **Optimization:** Scripts in `scripts/` (like `draco.cjs`) process these raw assets (e.g., converting GLB to optimized formats) for web consumption.

2.  **Build $\rightarrow$ Client Rendering (The Core Loop):**
    *   **Configuration:** `vite.config.js` reads this pipeline, instructing Vite to process MDX files (injecting components, handling frontmatter) and to bundle all static assets.
    *   **Execution:** The `npm run dev` command starts the Remix development server. Remix handles the request lifecycle:
        *   **Server:** Renders the initial HTML structure, fetching necessary data via Remix loaders/actions, and potentially routing through an edge function defined in `wrangler.toml`.
        *   **Client:** Hydrates the rendered HTML, loading the **Three.js/WebGL** scene to power the interactive, high-performance visual elements that dominate the user experience.

3.  **Deployment Flow:**
    *   The `npm run build` step executes the full build process defined in `vite.config.js`.
    *   The resulting optimized static files are then handed off to the platform-specific deployment tool (`wrangler pages deploy`), ensuring the site runs efficiently at the edge.