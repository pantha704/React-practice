Here's a simple explanation of `useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`, and `memo` in React:

- **`useState`**: Used to store state in a functional component. It allows you to declare variables that React will track and update when needed.

  Example:

  ```js
  const [count, setCount] = useState(0);
  ```

- **`useEffect`**: Runs side effects (like fetching data, subscriptions) after rendering. It runs based on specified dependencies.

  Example:

  ```js
  useEffect(() => {
    fetchData();
  }, [dependency]);
  ```

- **`useRef`**: Holds a **mutable reference** to a DOM element or value that persists across renders, without triggering a re-render.

  Example:

  ```js
  const inputRef = useRef(null);
  ```

---

- **`useMemo`**: Memoizes **computed values**. It recalculates the value only if dependencies change, preventing unnecessary recalculations.

  Example:

  ```js
  const expensiveCalculation = useMemo(
    () => computeExpensiveValue(a, b),
    [a, b]
  );
  ```

- **`useCallback`**: Memoizes **functions**. It ensures the function reference doesn't change between renders unless its dependencies change.

  Example:

  ```js
  const memoizedCallback = useCallback(() => {
    doSomething();
  }, [dependency]);
  ```

- **`memo`**: Optimizes **components** by preventing re-renders if the props haven't changed.

  Example:

  ```js
  export default React.memo(MyComponent);
  ```

These tools help improve performance by reducing unnecessary calculations or renders.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
