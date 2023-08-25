A custom Agile Infoways React boilerplate built with Vite.js, TypeScript, Styled Components.

## Project Title

<Include the project name and a concise, descriptive subtitle>

## Project Overview

<Provide a brief overview of the project's purpose and goals>

## Table of Contents

- [Introduction]
- [Prerequisites]
- [Installation]
- [Usage/Available Scripts]
- [Third-Party Libraries]
- [Environment Variables]
- [Project-specific TODOs]

### Prerequisites

Make sure you have the following prerequisites installed:

- Node.js (v18.16.0)
- npm or yarn

### Installation

Step-by-step guide on installing and setting up the project. Include commands for cloning the repository, installing dependencies, etc.

git clone <project_gitlab_url>
ex: git clone http://192.168.4.9/root/boilerplate-reactjs
cd your-boilerplate
npm install or yarn install

### Usage (Project Scripts)

This project includes essential scripts for development, building, and code quality checks.

- **npm start** (.env.development)
  - Launch the development server using Vite for live reloading.
- **npm run build** (.env.development)
  - Build the project in development mode.
- **npm run build:prod** (.env.production)
  - Build the optimized project for production.
- **npm run lint**
  - Run ESLint for code quality and standards.
- **npm run preview**
  - Preview the production build using Vite's server.
- **npm run format**
  - Auto-format code using Prettier.

### Third-Party Libraries

- **Vite.js**
  - Fast development and building.
- **TypeScript**
  - Type-safe coding.
- **ESLint**
  - Code linting for maintaining code quality.
- **Prettier**
  - Code formatting to keep your codebase consistent.
- **Styled Components**
  - For scoped styling.
- **Axios**
  - HTTP client for making API requests.
- **React Query**
  - Data fetching and state management library.
- **Redux Toolkit**
  - Redux for state management with a simplified API.

### Environment Variables

We use environment variables for different build modes. You can create two files:

- .env.development: Used with npm run build.
- .env.production: Used with npm run build:prod.

### Project-specific TODOs

After starting the project, don't forget to search for // TODO: comments. These are placeholders where you should make project-specific changes and customizations to fit your requirements.

Happy coding!
