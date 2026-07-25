import { useState } from "react";
import "./App.css";

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount((prev) => prev + 1);
  };

  const decrement = (): void => {
    setCount((prev) => prev - 1);
  };

  const reset = (): void => {
    setCount(0);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>✨ Beautiful Counter</h1>

        {/* <p className="subtitle">
          Hi Lubna, Its your counter
        </p> */}

        <div className="counter">{count}</div>

        <div className="buttons">
          <button
            className="btn red"
            onClick={decrement}
          >
            −
          </button>

          <button
            className="btn blue"
            onClick={reset}
          >
            Reset
          </button>

          <button
            className="btn green"
            onClick={increment}
          >
            +
          </button>
        </div>

        <p className="footer">
          Developed by ❤️ Arslan Altaf
        </p>
      </div>
    </div>
  );
}

export default App;