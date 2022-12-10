import { createContext, useContext, useState } from "react";

const colorContext = createContext();
export default function App() {
  const [theme, setTheme] = useState();
  return (
    <colorContext.Provider value={theme}>
      <div className="App">
        <h1 style={{ color: theme }}>hiii</h1>
        <button onClick={() => setTheme("blue")}>get</button>
        <Form />
      </div>
    </colorContext.Provider>
  );
}

const Form = () => {
  const nilesh = useContext(colorContext);
  return (
    <div>
      <h1 style={{ color: nilesh }}>Nilesh</h1>
    </div>
  );
};
