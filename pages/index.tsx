import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { RecoilRoot, atom, useRecoilState } from "recoil";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Recoil Atom
const textState = atom({
  key: "textState",
  default: "",
});

// Memoized Component
const MemoizedComponent = React.memo(({ value }: { value: string }) => {
  console.log("MemoizedComponent rendered");
  return <div>{value}</div>;
});

const Home = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useRecoilState(textState);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // useEffect Example
  useEffect(() => {
    console.log("Component mounted or count changed");
  }, [count]);

  // useMemo Example
  const expensiveCalculation = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  // useCallback Example
  const memoizedCallback = useCallback(() => {
    console.log("Callback executed");
  }, [count]);

  return (
    <div>
      <h1>React Hooks and Recoil Example</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <p>Expensive Calculation: {expensiveCalculation}</p>
      <MemoizedComponent value={text} />
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={memoizedCallback}>Execute Callback</button>
    </div>
  );
};

const About = () => <div>About Page</div>;

const App = () => (
  <RecoilRoot>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  </RecoilRoot>
);

export default App;
