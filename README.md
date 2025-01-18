# Poll Manager

A simple voting application built with **React**, **TypeScript**, **HTML**, and **CSS**, bundled using **Vite** and managed with **pnpm**. This application allows users to vote between two options, view the current votes, and declare the winner.

## Features

- Dynamic poll question and options.
- Vote for one of the two options.
- Disable voting buttons after a winner is declared.
- Display vote counts dynamically, including superhero names.
- Handle edge cases like ties and no votes.
- Responsive and accessible UI with clean, minimal styling.

## Tech Stack

- **React** with **TypeScript**
- **CSS** for styling
- **Vite** as the bundler
- **pnpm** for package management

## Folder Structure

```
poll-manager/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── PollManager.tsx
│   │   ├── Vote.tsx
│   │   └── Results.tsx
│   ├── data/
│   │   └── Poll.ts
│   ├── styles/
│   │   └── index.css
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

- **Node.js** and **pnpm** installed on your system.
- A code editor (e.g., VS Code).

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd poll-manager
   ```

2. Install dependencies using `pnpm`:
   ```bash
   pnpm install
   ```

### Development

To start the development server:

```bash
pnpm run dev
```

The application will be available at `http://localhost:5173`.

### Build

To create a production-ready build:

```bash
pnpm run build
```

The build files will be generated in the `dist/` directory.

### Preview

To preview the production build locally:

```bash
pnpm run preview
```

## Components

### PollManager

- Manages the application state for votes and winner.
- Loads dynamic poll data from `Poll.ts`.
- Renders the `Vote` and `Results` components.

### Vote

- Displays the voting buttons for each option.
- Buttons are labeled with superhero names.
- Disables buttons once the winner is declared.

### Results

- Displays superhero names and their vote counts.
- Displays the winner or a tie message.
- Disables the "View Winner" button if no votes are cast.

## Styling

The project uses pure CSS, located in `src/styles/index.css`, for custom styling. Utility classes such as `.btn`, `.card`, and `.title` are used for a clean and responsive design.

## Example Poll Data

The poll data is stored in `src/data/Poll.ts`:

```typescript
export interface Poll {
  id: number;
  question: string;
  options: { id: number; text: string; votes: number }[];
}

export const poll: Poll = {
  id: 1,
  question: "Who is your favorite superhero?",
  options: [
    { id: 1, text: "Superman", votes: 0 },
    { id: 2, text: "Batman", votes: 0 },
  ],
};
```

## Demo

Here is a demo of the Poll Manager in action:

![Poll Manager Demo](public/assets/demo.gif)

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributions

Contributions are welcome! Feel free to submit a pull request or open an issue.

---

Let me know if you need any further updates or additional sections for this README!
