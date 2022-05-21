import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>welcome to my computer hardware store</h1>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
