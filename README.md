# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Bozja Holster Simulator
This is a simulator for the holsters of Bozja in Final Fantasy XIV.

- [Website link can be found here.](https://bozjaholstersim.netlify.app)

# Basic overview of features include;
- Lost Finds Cache (like in-game) with extra information for pure essences and affected actions, plus actions like Cure II.
- Lost Finds Holster (like in-game) with additional buttons to save, clear, set role type and link creation to share your holster quickly with others.
- Prepop action window for your two lost actions and essence.
- Instance timeline to track when and how you spend your actions for the holster.
- Lost Action resource manager to track what actions you have yet to spend or have spent in excess in your timeline.
- Forgotten Fragment information to help find the action you are seeking with all locations to acquire the fragment.
- Saved holsters which surpass the limit of 10 slots in-game and renamable, containing all the information for the holster laid out in a clear and easy to understand way, with role type filtering and sorting and set name sorting.
- Saved set importing and exporting, with options to select only desired sets to share several sets with others in a JSON file at once.


