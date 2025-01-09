# zdzw_client

This project is the frontend of the **ZDZW** application, developed with **React 18**, **TypeScript**, and **Vite**. It uses **Material UI (MUI)** for UI components and **Chart.js** for data visualizations.

## Prerequisites

Before starting, make sure you have the following installed:

- **Ubuntu 20.04 or higher**.
- **`curl`** for downloading scripts.
- **nvm** (Node Version Manager) to manage multiple versions of Node.js.

## Installing `nvm` on Ubuntu

1. Open the terminal.
2. Run the following command to install the latest version of `nvm`:

   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
   ```

3. Reload the terminal profile:

   ```bash
   source ~/.bashrc
   ```

4. Verify the installation of `nvm`:

   ```bash
   nvm --version
   ```

## Installing Node.js with `nvm`

1. Install Node.js version 20:

   ```bash
   nvm install 20
   ```

2. Activate version 20:

   ```bash
   nvm use 20
   ```

3. Verify that the correct version of Node.js is being used:

   ```bash
   node -v
   ```

## Development Environment Setup

### Cloning the Repository

```bash
git clone <REPOSITORY_URL>
cd zdzw_client
```

### Installing Dependencies

Run the following command to install project dependencies:

```bash
npm install
```

### Available Scripts

The following scripts are available for project development:

- **Development Server** (`npm run dev`): Starts the development server and opens the project in the default browser.
- **Build** (`npm run build`): Builds the project and outputs the production files in the `dist/` folder.
- **Preview** (`npm run preview`): Launches a preview of the production build.
- **Lint** (`npm run lint`): Runs ESLint to check for issues in the TypeScript and JavaScript files.

## Useful Commands

- **Clear dependency cache**:

  ```bash
  npm cache clean --force
  ```

- **Update dependencies**:

  ```bash
  npm update
  ```

## Running the Project

1. Start the development server:

   ```bash
   npm run dev
   ```

## Production Build

To generate a production-ready build:

```bash
npm run build
```

The output files will be located in the `dist/` folder.
