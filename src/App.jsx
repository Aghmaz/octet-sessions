import "./app.css";
import { Route, Routes } from "react-router";
import Chat from "./pages/chat";
import Home from "./pages/Home";
import Parent from "./components/parent";
import HorizontalNonLinearStepper from "./components/multiStepForm";
import CounterApp from "./redux/counterApp";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/user" element={<Chat />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/home/:userId" element={<Dashboard />} />
        <Route path="/parent" element={<Parent />} />
        <Route path="/form" element={<HorizontalNonLinearStepper />} />
        <Route path="/redux-toolkit" element={<CounterApp />} />
      </Routes>
    </>
  );
}

export default App;
