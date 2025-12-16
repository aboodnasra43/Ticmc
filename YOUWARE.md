# YOUWARE.md

## Project Overview
**TICMC - Tunisian International Consulting & Management Company**
A premium, single-page React application for a luxury F&B consulting firm. The project serves as a digital portfolio showcasing the firm's expertise, managed venues, and leadership.

## Tech Stack
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS (Custom configuration for TICMC brand colors)
- **Animation**: Framer Motion, GSAP
- **Icons**: Lucide React
- **State Management**: Zustand
- **Physics**: Matter.js, Cannon-es (available for interactive elements)
- **3D**: Three.js (available for visual effects)

## Key Commands
- **Development**: `npm run dev` - Starts the local development server.
- **Build**: `npm run build` - Compiles the application for production. **Must be run before deployment or task completion.**
- **Preview**: `npm run preview` - Serves the built application locally.

## Architecture & Project Structure

### Core Philosophy
The project follows a **data-driven, component-based architecture**. Content is strictly separated from presentation to facilitate easy updates without touching the codebase logic.

### Directory Structure
- **`src/data/`**: The "CMS" of the application. Contains JSON files (e.g., `abuAli.json`, `coFounder.json`) that drive the content of showcase sections.
- **`src/components/home/`**: Contains the main sections of the landing page.
  - **Showcase Components**: Components like `AbuAliShowcase.tsx`, `FairouzShowcase.tsx` are modular templates that consume their respective JSON data.
  - **Core Sections**: `Hero.tsx`, `Services.tsx`, `Founders.tsx`, `Contact.tsx`.
- **`src/components/ui/`**: Reusable atomic components (e.g., `Section.tsx`, `Button.tsx`, `AudioPlayer.tsx`).
- **`public/assets/`**: Stores all static media. Organized by section (e.g., `co-founder/`, `abu-ali/`). **Always use absolute paths** (e.g., `/assets/image.png`) in code.

### Data Pattern
To add a new portfolio item (Restaurant/Showcase):
1.  **Data**: Create `src/data/newPlace.json`.
2.  **Assets**: Create `public/assets/new-place/` and add images.
3.  **Component**: Duplicate an existing showcase component (e.g., `AbuAliShowcase.tsx`), rename it, and import the new JSON.
4.  **Integration**: Add the new component to `src/pages/Home.tsx`.

## Design System
- **Colors**: Defined in `tailwind.config.js`.
  - `ticmc-green` (#0B3A34): Primary brand color.
  - `ticmc-gold` (#C7A96B): Accent/Luxury color.
  - `ticmc-dark` (#051F1C): Dark background.
  - `ticmc-light` (#F5F5F0): Light background.
- **Typography**:
  - **Headings**: `Playfair Display` (Serif) - Used for titles and elegance.
  - **Body**: `Lato` (Sans-serif) - Used for readability.

## Recent Updates (Dec 2025)
- **Founders**: Merged CEO and Co-Founder sections into a unified `Founders` component, presenting both brothers as equal founders.
- **Audio**: Added background piano music with mute/unmute toggle (`AudioPlayer.tsx`).
- **Certificates**: Extracted "Certifications & Achievements" from Co-Founder section into a standalone `Certificates` component and moved it to the end of the page (before Heritage).
- **Heritage**: Extracted "A Legacy of Business & Media" from Co-Founder section into a standalone `Heritage` component and moved it to the end of the page (before Contact).
- **Portfolio**: Removed individual certificate showcases to centralize them in the Co-Founder section.
- **Victor Hugo**: Updated showcase video.
- **Blue & Black**: Expanded gallery with 5 new images.
- **Nagham**: Added logo to showcase header.
- **Diego Vitagliano**: Added a new gallery section with 7 images of food and ambiance.
- **Co-Founder Section**: Refactored to include a "Family Archive" with a video player and historical photo gallery.
- **Video Integration**: Supports local video files stored in `public/assets/`.
- **Locations**: Updated to include Qatar alongside Dubai and Tunisia.
- **Gallery Updates**: Expanded galleries for Nagham and Abu Ali with new images.

## Deployment
The project is built as a static site (`dist/` folder) and can be deployed to any static hosting provider (Netlify, Vercel, Cloudflare Pages).
