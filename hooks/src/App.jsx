import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { RecoilRoot, atom, useRecoilState } from "recoil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

// Recoil Atom
const textState = atom({
  key: "textState",
  default: "",
});

// Memoized Component
const MemoizedComponent = React.memo(({ value }) => {
  console.log("MemoizedComponent rendered");
  return <div>Memoized Component Value: {value}</div>;
});

const Home = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useRecoilState(textState);

  // useRef Example
  const inputRef = useRef(null);

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
  }, [text]);

  return (
    <div>
      <div style={{ backgroundColor: "#f0f0f0", color: "#000000" }}>
        <h1>React Hooks and Recoil Example</h1>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <p>Count: {count}</p>
        <br />
        <p>
          This is a useState it renders the full page whenever the count
          changes.
        </p>
      </div>
      <br />
      <div style={{ backgroundColor: "#e0e0e0", color: "#000000" }}>
        <p>Expensive Calculation (useMemo): {expensiveCalculation}</p>
        <br />
        <p>
          This is a useMemo it renders the MemoizedComponent only when the text
          value in the dependency array changes (i.e. count).
        </p>
      </div>
      <br />
      <div style={{ backgroundColor: "#c0c0c0", color: "#000000" }}>
        <p>
          This is a useRef it renders the input field and the button. The input
          field is controlled by the text state and the button is controlled by
          the memoizedCallback.
        </p>
        <input
          ref={(el) => {
            inputRef.current = el;
            if (el) {
              console.log("Input field is rendered");
            }
          }}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={memoizedCallback}>
          Execute Callback (useCallback)
        </button>
        <p>Text: {text}</p>
      </div>
    </div>
  );
};

const About = () => <div>About Page</div>;

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
