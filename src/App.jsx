import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form"
import Contacts from "./components/Contacts";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <Heading />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

