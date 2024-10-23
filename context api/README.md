# Context API Usecase

- Global state management
- Avoid prop drilling

1. Define context in a separate file ( here context.jsx )
2. Create a provider component to wrap the app and provide the context ( here AppProvider() )
3. Use the context in the components ( here Home.jsx ) by

- importing useAppContext hook, or if u havent created a custom hook write, const {contextName} = useContext(<your context>) to import the context values.
- Now use the values in the component

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
