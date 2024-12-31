# Drinks Landing Page

This is a Next.js project for a drinks landing page. The project uses various technologies including React, Three.js, GSAP, and Tailwind CSS to create an interactive and visually appealing landing page.

## Project Structure

```
.
├── public
│   ├── fonts
│   ├── hdrs
│   └── Soda-can.gltf
├── src
│   ├── app
│   ├── components
│   ├── hooks
│   └── pages
├── .eslintrc.json
├── .gitignore
├── bun.lockb
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
└── tsconfig.json
```

## Components

### Hero.tsx

The Hero component is the main hero section of the landing page. It includes animations and interactions using GSAP.

### SkyDive.tsx and SkyScene.tsx

The SkyDive component includes a 3D scene created with Three.js and @react-three/drei. The SkyScene component defines the 3D objects and animations.

### Carousel.tsx and CarouselScene.tsx

The Carousel component displays a carousel of soda cans with animations. The CarouselScene component defines the 3D objects and animations for the carousel.

### AlternatingText.tsx and AlternatinTextScene.tsx

The AlternatingText component displays alternating text sections with a 3D scene. The AlternatinTextScene component defines the 3D objects and animations for the alternating text sections.

### Footer.tsx

The Footer component displays the footer of the landing page, including the FizziLogo and CircleText components.

### ViewCanvas.tsx

The ViewCanvas component sets up the Three.js canvas and includes a loader for the 3D scenes.

### FloatingCans.tsx

The FloatingCans component defines a floating soda can with animations.

### SodaCan.tsx

The SodaCan component defines the 3D model and textures for the soda can.

### TextSplitter.tsx

The TextSplitter component splits text into individual characters for animations.

### CircleText.tsx

The CircleText component displays circular text with animations.

### Bubbles.tsx

The Bubbles component displays floating bubbles in the background.

### Bounded.tsx

The Bounded component is a wrapper that provides padding and centering for its children.

## Hooks

### useMediaQuery.ts

The useMediaQuery hook is used to detect media queries and update the component state accordingly.

### useStore.ts

The useStore hook is a Zustand store used to manage global state.

## Styling

The project uses Tailwind CSS for styling. Custom styles and animations are defined in globals.css.

## Custom Animations

## Dependencies

### Main Dependencies

- **next**: The Next.js framework.
- **react**: The React library.
- **react-dom**: The React DOM library.
- **three**: The Three.js library for 3D graphics.
- **@react-three/fiber**: React renderer for Three.js.
- **@react-three/drei**: Useful helpers for @react-three/fiber.
- **gsap**: The GreenSock Animation Platform for animations.
- **zustand**: A small, fast, and scalable bearbones state-management solution.

### Development Dependencies

- **@types/node**: TypeScript definitions for Node.js.
- **@types/react**: TypeScript definitions for React.
- **@types/react-dom**: TypeScript definitions for React DOM.
- **eslint**: A pluggable linting utility for JavaScript and JSX.
- **eslint-config-next**: ESLint configuration for Next.js.
- **postcss**: A tool for transforming CSS with JavaScript plugins.
- **tailwindcss**: A utility-first CSS framework for rapid UI development.
- **typescript**: A strongly typed programming language that builds on JavaScript.

This documentation provides an overview of the project structure, components, hooks, styling, and dependencies. It should help you understand and navigate the project more effectively.
