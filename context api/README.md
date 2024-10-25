# Context API Usecase

- Global state management
- Avoid prop drilling

1. Define context in a separate file ( here context.jsx )

   - Example:

   ```js
   const MyContext = createContext(defaultValue);
   ```

2. Create a provider component to wrap the app and provide the context ( here AppProvider() )

   - Example:

   ```js
   const AppProvider = ({ children }) => {
     return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
   };
   ```

3. importing useAppContext hook, or if u havent created a custom hook write, const {contextName} = useContext(<your context>) to import the context values.

   - Example:

   ```js
   const { contextName } = useContext(MyContext);
   ```

   - Now use the values in the component

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
