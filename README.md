# Eventora Frontend

## Setup

1. Install dependencies: npm install

2. Start development server: npm run dev

3. Build for production: npm run build


## Features

- Vite + React 18+
- Tailwind CSS 4.1
- Google Fonts (Inter, Poppins)
- Responsive, animated Header & Footer
- Theme switcher (light/dark, persists)
- Routing (Home, Events, Organize, About, Contact, 404)
- All images in /src/assets/images
- Favicon in /public
- DRY, SoC, commented code

## Favicon

- Place your favicon in `/public/favicon.ico`
- Reference in `index.html` as:
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">

Images
Place all images in /src/assets/images
Import in components as:
import logo from '../assets/images/logo.png'

**Create `/client/.gitignore`:**
node_modules
dist
.env
.DS_Store
