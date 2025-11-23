# Portfolio Website - Kyle Sontag

## Overview

Personal portfolio website built with React and TypeScript, features automated code quality checks, pre-commit hooks, and CI/CD pipeline.

## Portfolio Sections

- **Basic Information** - Name, bio, contact links
- **Work** - Projects with descriptions, images, links, and tech stacks
- **Skills** - Languages, frameworks, and tools
- **Resources** - Helpful documentation and learning resources
- **Developer Setup** - VS Code configuration, terminal, and font preferences

## Technologies Used

- React
- TypeScript
- Docker
- Nginx
- Styled Components
- Jest (Testing)
- ESLint (Code Quality)
- Prettier (Code Formatting)
- Husky (Git Hooks)
- GitHub Actions (CI/CD)

## Prerequisites

- Docker Desktop
- Node.js (v18+)
- Git

## Running the Application With Docker

### Build Docker Image

```bash
docker build -t sontag_kyle_coding_assignment14 .
```

### Run Container

```bash
docker run -d -p 5575:5575 --name sontag_kyle_coding_assignment14 sontag_kyle_coding_assignment14
```

### Access the Application

Open browser and navigate to http://localhost:5575 or http://127.0.0.1:5575

### Stop the Container

```bash
docker stop sontag_kyle_coding_assignment14
```

### Remove the Container

```bash
docker rm sontag_kyle_coding_assignment14
```

### View Running Containers

```bash
docker ps
```

## Local Development

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm start
```

The app will run at http://localhost:3000

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Code Quality Tools

### Husky Pre-commit Hooks

Runs before every commit:

- Prettier formatting
- ESLint checks
- Unit tests

### Quality Commands

#### Format Code

```bash
npm run format
```

#### Check Formatting

```bash
npm run format:check
```

#### Run Linter

```bash
npm run lint
```

#### Fix Lint Issues

```bash
npm run lint:fix
```
