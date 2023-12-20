import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import RegisterForm from "./pages/RegisterForm";
import LoginForm from "./pages/LoginForm";
import Home from "./pages/Home";
import MapComponent from "./components/MapComponent";

function App() {
  return (
    <div>
      <RegisterForm />
    </div>
  );
}

export default App;
