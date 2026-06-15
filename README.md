# ⌨️ Key Trainer

A touch-typing training application built with React, TypeScript, and Vite. Practice your typing skills with real-time feedback, an on-screen virtual keyboard, and detailed post-exercise statistics.

## Features

- **Bilingual layouts** – Switch between English (QWERTY) and Russian (ЙЦУКЕН) by pressing `Ctrl`
- **Random word generation** – Each session generates a fresh sequence from built-in dictionaries (100+ English words, 200+ Russian words)
- **Adjustable text length** – Scroll the mouse wheel to increase or decrease the number of words
- **Real-time feedback** – Correct keystrokes are highlighted in the primary color; incorrect ones appear red
- **Virtual on-screen keyboard** – Displays the active layout with visual press feedback (green for correct, red for incorrect)
- **Live statistics** – Track speed (CPM), accuracy (%), misprint count, and elapsed time as you type
- **Results overlay** – After completing the text, view your performance and press `Enter` to start a new round

## Tech Stack

| Layer          | Technology                                                   |
| -------------- | ------------------------------------------------------------ |
| Language       | [TypeScript](https://www.typescriptlang.org/) (strict mode)  |
| UI Library     | [React 18](https://react.dev)                                |
| Build Tool     | [Vite 8](https://vite.dev)                                   |
| Routing        | [React Router 6](https://reactrouter.com)                    |
| Styling        | SCSS ([sass-embedded](https://www.npmjs.com/package/sass-embedded)) |
| Linting        | [ESLint](https://eslint.org) with TypeScript & React plugins |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) >= 20 (or [Docker](https://docker.com) for the containerized option)

### Installation & Usage

#### Option 1 – Without Docker

```bash
git clone https://github.com/diominvd/key-trainer.git
cd key-trainer

npm install
npm run dev
```

#### Option 2 – With Docker

```bash
git clone https://github.com/diominvd/key-trainer.git
cd key-trainer

docker compose up --build
```

Open [http://localhost:5173](http://localhost:5173) in your browser and start training.

## Available Scripts

| Script      | Description                                                |
| ----------- | ---------------------------------------------------------- |
| `npm run dev`     | Start the Vite development server                     |
| `npm run build`   | Type-check with `tsc` and build for production to `dist/` |
| `npm run preview` | Preview the production build locally                       |
| `npm run lint`    | Run ESLint on all `.ts` / `.tsx` files                     |

## Project Structure

```
src/
├── app/           # Root component (App.tsx)
├── config/        # Keyboard layouts, routes, types, word dictionaries
├── modules/       # Reusable feature modules (e.g., Header)
├── pages/         # Page components and their sub-components
│   └── Home/
│       ├── Home.tsx
│       └── components/
│           ├── Keyboard/
│           ├── Result.tsx
│           └── TrainingText/
├── providers/     # React Context providers (TrainingProvider)
├── styles/        # Global styles, themes, and component SCSS files
├── ui/            # Primitive UI components (Layout, typography)
└── utils/         # Helper functions (generateRandomText)
```

## License

MIT
