# electron-template-zen-1
# Purpose
This package is a template for desktop applications built with Electron Forge that use:
1. TypeScript
1. React
1. SCSS
1. Tailwind CSS

[ShadCN](https://ui.shadcn.com/docs) UI component support is ready to go.

It's built based on my personal preferences.

# Usage
1. Clone this repo
1. Run `npm run start`

## Change project name
Update the following properties in `package.json` to match your project/product:
1. `name`
1. `productName`
1. `description`
1. `author.name`
1. `author.email`


# Project Details

## Render and Main Processes
An Electron application is divided into two processes:
- **Main Process**: Runs on Node.js, can use native Node.js packages, and interacts with the OS. Code is in `src/main`.
- **Renderer Process**: Runs in a browser environment, rendering the UI. Code is in `src/render`.

## Global Aliases

### Usage
Global aliases simplify `import` statements:
- `@/` refers to the `src` folder.
- Example: `import { Button } from '@/render/uikit/Button'`.

### Modification
To add or remove aliases, update:
- `tsconfig.json` under `compilerOptions.paths`
- `webpack.renderer.config.ts` under `resolve.alias`
- `.eslintrc.json` under `settings.import/resolver.alias.map`

## Linting and Code Style

- **ESLint**: Linting is enforced via ESLint and is automatically run by Webpack.
- Run `npm run lint:fix` to auto-fix errors.
- **VSCode Users**: Code style is also enforced through `.vscode/settings.json`.

### Code Style
Code style and formatting can be modified in `.eslintrc.json`.

## UI Components
- Fundamental reusable ui components are stored in `src/render/uikit`.
- The purpose of `uikit` is for you to create your own component library.
- You can still use a 3rd party one if you choose.
- Some ShadCN components have already been included in `uikit`.

## Styling

- Entry point: `css/index.scss`
- Tailwind CSS is configured with ShadCN color theme extensions. See `tailwind.config.js` for the added colors.

## How to use ShadCN
1. Go to the ShadCN [website](https://ui.shadcn.com/docs/components/card) and choose a component.
1. Under **Installation**, choose **Manual**.
1. Copy and paste the code to a file in `src/render/uikit`

## Icons
- The Iconify React library has been included for a diverse range of icons to choose from.
- The `lucide-react` icon library is only included to support ShadCN components

## Types
Global types shared between processes are in the `types` folder. `types/index.d.ts` adds type support for `window.ipc`.