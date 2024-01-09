import { useState } from "react";

const CounterWithFuncComponent = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: "1px solid red", margin: 10, padding: 10 }}>
      <button
        style={{
          background: "purple",
          color: "white",
          margin: 10,
          padding: 10,
        }}
        onClick={() => setCount((prev) => prev + 1)}
      >
        {count}
      </button>
    </div>
  );
};

export default CounterWithFuncComponent;
