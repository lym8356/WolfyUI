import { useState } from "react";
import Button, { ButtonType, ButtonSize } from "./components/Button/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Vite + React</h2>
      <h3>Vite + React</h3>
      <hr />
      <code>const a = 'b';</code>

      <Button disabled>Test</Button>
      <Button size={ButtonSize.Large} btnType={ButtonType.Primary}>Test</Button>
      <Button size={ButtonSize.Small} btnType={ButtonType.Danger}>Test</Button>
      <Button btnType={ButtonType.Link} href="https://www.google.com/" target="_blank">Google</Button>
      <Button btnType={ButtonType.Link} href="https://www.google.com/" disabled>Google</Button>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
