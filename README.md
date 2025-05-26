# SoftSwift Frontend Test Task

This project is a responsive landing page built with React and SCSS, designed as a test task for SoftSwift. It demonstrates modern UI/UX practices, reusable React components, and adaptive layouts for various screen sizes.

## Live Demo

[https://sanekxarcs.github.io/test-task-ss/](https://sanekxarcs.github.io/test-task-ss/)

## Requirements

- Node.js v23.6.1
- npm v11.2.0

## Features

- Responsive layout for desktop, tablet, and mobile
- Custom SVG React components (CartIcon, LogoFullIcon) with color and gradient support
- Modern SCSS architecture with variables, mixins, and media queries
- Data-driven sections (Offers, About, Hero) using local JSON files
- Clean, accessible, and semantic markup

## Project Structure

```
src/
  App.jsx, App.scss         # Main app entry and styles
  index.jsx, index.scss     # React entry point and global styles
  assets/
    icons/                  # SVG icons (cart, logo, etc.)
    images/                 # WebP images for hero and offers
    fonts/                  # Lato font files
  components/
    CartIcon.jsx            # Reusable cart icon with color/gradient props
    LogoFullIcon.jsx        # Full logo SVG as a React component
    Header/                 # Header with navigation and logo
    Hero/                   # Hero section with background, overlay, and CTA
    Offers/                 # Offers grid with cards and images
    About/                  # About section with expandable text
    Footer/                 # Footer with copyright
  db/
    aboutData.json          # About section content
    heroData.json           # Hero section content
    offersData.json         # Offers section content
```

## How to Run

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the development server:
   ```sh
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

## Customization

- To change theme colors, edit variables in `src/App.scss`.
- To update icons or images, replace files in `src/assets/icons/` or `src/assets/images/`.
- To modify section content, edit the corresponding JSON files in `src/db/`.

## Notable Implementation Details

- **SVG as React Components:** Icons and logos are implemented as React components, supporting dynamic color and gradient props, including hover transitions.
- **SCSS Structure:** Uses variables, mixins, and responsive utilities for maintainable and scalable styles.
- **Accessibility:** Semantic HTML and keyboard-friendly navigation.

## Author

Test task completed by [Your Name] for SoftSwift.

---

For any questions or feedback, please contact the SoftSwift team.
