import "./app.css";
import { Route, Routes } from "react-router";
import Chat from "./pages/chat";
import Home from "./pages/Home";
import Parent from "./components/parent";
import HorizontalNonLinearStepper from "./components/multiStepForm";
import CounterApp from "./redux/counterApp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/user" element={<Chat />} />
        <Route path="/" element={<Home />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/form" element={<HorizontalNonLinearStepper />} />
        <Route path="/redux-toolkit" element={<CounterApp />} />
      </Routes>
    </>
  );
}

export default App;
