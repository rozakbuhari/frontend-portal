# Frontend Portal Monorepo

## Quick Start
```sh
npm install

# Backend
npx nx run-many --target=serve --projects=backend,kyc-backend,kyb-backend --parallel

# Frontend, in new terminal
npx nx serve root --devRemotes=kyb,kyc
```

## Getting Started

### 1. Install dependencies
```sh
npm install
```

### 2. Run the development server
Replace `<project>` with your app name (e.g. `root`, `kyb`, `kyc`, `backend`, `kyb-backend`, `kyc-backend`):
```sh
npx nx serve <project>
```

### 3. Run unit tests
Replace `<project>` with your app or lib name:
```sh
npx nx test <project>
```

### 4. Run e2e tests
Replace `<project-e2e>` with your e2e project name (e.g. `frontend-root-e2e`, `kyb-e2e`, `kyc-e2e`):
```sh
npx nx e2e <project-e2e>
```

---

For a list of all projects:
```sh
npx nx show projects
```

For more details on available commands:
```sh
npx nx --help
```