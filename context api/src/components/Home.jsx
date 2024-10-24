import React from "react";
import { useAppContext } from "../context";

const Home = () => {
  const { count, setCount } = useAppContext();

  return (
    <div>
      <h1>Context API Example</h1>
      <p>Count: {count}</p>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
        <button onClick={() => setCount(count - 1)}>Decrement Count</button>
      </div>
    </div>
  );
};

export default Home;
