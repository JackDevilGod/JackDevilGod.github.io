# jackdevilgod.github.io

A personal portfolio website, built with [SvelteKit](https://kit.svelte.dev/) and [Svelte 5](https://svelte.dev), and deployed as a static site to GitHub Pages.

## Features

- Svelte 5 with TypeScript
- Static site generation (via `@sveltejs/adapter-static`) for fast hosting on GitHub Pages
- Pages: Home, Projects, Art, Video, Engineering, About, and Contact
- [GitHub Actions](.github/workflows/deploy.yml) workflow that builds and deploys the site automatically on every push to `main`

## Getting started

This project uses [pnpm](https://pnpm.io) and [Sv](https://github.com/sveltejs/cli) for scaffolding.

```sh
# Create a new project in the current directory
npx sv create

# Create a new project in a directory called my-app
npx sv create my-app
```

Install dependencies:

```sh
pnpm install
```

## Developing

Start a local development server:

```sh
pnpm run dev

# or open the app in a new browser tab
pnpm run dev -- --open
```

## Building

Create a production build (output goes to the `build/` directory):

```sh
pnpm run build
```

Preview the production build locally:

```sh
pnpm run preview
```

## Deploying

Deployment is handled automatically by the GitHub Actions workflow in
`.github/workflows/deploy.yml`, which runs on every push to `main`. It installs
dependencies, formats and lints the code, builds the static site, and deploys it
to GitHub Pages.

## Scripts

| Command            | Description                                    |
| ------------------ | ---------------------------------------------- |
| `pnpm run dev`     | Start the local development server             |
| `pnpm run build`   | Build a production version of the site         |
| `pnpm run preview` | Preview the production build locally           |
| `pnpm run check`   | Type-check the project                         |
| `pnpm run lint`    | Check formatting and run ESLint                |
| `pnpm run format`  | Format code with Prettier                       |
