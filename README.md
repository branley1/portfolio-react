# **Branley Mmasi**
[![Netlify Status](https://api.netlify.com/api/v1/badges/a1192e94-a7ab-46b3-91bf-29ba6d7ad682/deploy-status)](https://app.netlify.com/sites/bmmasi/deploys)

This project serves as my digital space to showcase who I am, what I do, and the 
projects I've either worked on or been a part of. This repository contains two portfolio websites:

1. Modern React Portfolio (Main Site)
   - Main portfolio site
   - Built with React + TypeScript
   - Deployed at: https://bmmasi.com

2. Classic Portfolio (Classic Site)
   - Alternative portfolio design
   - Built with HTML/CSS/JS
   - Accessible at: https://bmmasi.com/classic

## Setup Instructions

1. The React portfolio is deployed as the main site
2. The classic portfolio is deployed to the /classic subdirectory
3. Netlify configuration handles proper routing between sites

## Dependencies

### React Portfolio
- React 18.x with TypeScript
- React Router DOM 6.x
- React Bootstrap
- SCSS for styling
- See package.json for complete list

### Classic Portfolio
- jQuery 3.x
- Bootstrap 4.3.1
- Particle.js
- Various jQuery plugins (see classic/js/ directory)

## Deployment

The site is deployed on Netlify with the following configuration:
- Main site (/) serves the React portfolio
- Classic site (/classic) serves the HTML/CSS portfolio
- Routing is handled via Netlify configuration

---

## **Table of Contents**
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [How to Run Locally](#how-to-run-locally)
- [Deployment](#deployment)
- [Credits](#credits)
- [Future Enhancements](#future-enhancements)

---

## **Overview**
This portfolio reflects my skills, experience, and passions. It includes:
- A hero section introducing myself.
- A sidebar showcasing my technical skills and course highlights.
- Detailed sections like **About Me**, **Experience Timeline**, and **Projects**.
- Clean and intuitive navigation to help visitors find what they are looking for.

Explore the live version here: [**Bmmasi Portal**](https://bmmasi.com)

---

## **Features**
- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop).
- **Sticky Sidebar**: (TODO): Stays in view when scrolling, making navigation seamless.
- **Accessible**: Designed with accessibility in mind, including proper contrast, alt text, and semantic HTML.
- **Hero Section**: Full-screen intro with a friendly yet professional touch.
- **Interactive Projects Section**: Displays featured projects with links to GitHub and live demos.
- **Modern Styling**: Built with SCSS for clean and maintainable code.

---

## **Tech Stack**
- **Frontend Framework**: React (TypeScript)
- **Build Tool**: Vite
- **Styling**: SCSS (with theming support)
- **Hosting**: Netlify (with a custom domain)
- **UI Library**: React Bootstrap
- **Icons & Assets**: Icons8, Unsplash, Hero Patterns

---

## **Project Structure**
```plaintext
src/
├── assets/                 # Static assets
├── components/             # React components (AboutMe, Projects, etc.)
├── pages/                  # Page-level components
├── contexts/               # React context providers
├── styles/                 # SCSS entry + modules
│   ├── abstracts/          # variables, mixins, functions
│   ├── base/
│   ├── components/
│   ├── themes/
│   └── main.scss          
├── utils/                  # Helpers/utilities
├── App.tsx                 # App shell
├── main.tsx                # Vite entry point
public/
└── classic/                # Classic portfolio (static site)
    ├── css/
    ├── js/
    ├── images/
    ├── fonts/
    └── index.html
```

---

## **How to Run Locally**
Want to see the code in action? Here's how to get the project up and running:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/branley1/portfolio-react.git
   cd portfolio-react
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

---

## **Deployment**
This portfolio is hosted on **Netlify** using a custom domain. Here's the latest live version: [Bmmasi Portal](https://bmmasi.com).

---

## **Credits**
- **Design Inspiration**: Modern portfolio designs and LinkedIn.
- **Images**: Sourced from Google Search and private photos (https://www.google.com/).

---

## **Future Enhancements**
- Add a blog section to share my insights and experiences.
- Add a hobbies section for music, 3D dev, Game dev etc.
- Dynamic animations for a more interactive feel.
- An expanded project showcase with in-depth case studies.

---

## **License** 

MIT License
