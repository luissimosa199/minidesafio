import "./App.css";
import Header from "./components/Header";
import Data from "./components/Data";
import Form from "./components/Form";
import Cover from "./components/Cover";

import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Header />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Cover />} />
        <Route path="/data" element={<Data />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
