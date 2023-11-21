import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bg_img from "./assets/3a9b93dfc69000412e70045ae736bfd9.jpg";
import FormData from "./components/FormData";

function App() {
  return (
    <div className="app">
      <div className="form-container">
        <FormData />
      </div>
      <div className="right_side">
        <img src={bg_img} alt="bg" />
      </div>

      <ToastContainer />
    </div>
  );
}

export default App;
