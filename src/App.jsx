import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AppRoutes } from "./Routes";
import dotenv from "dotenv";

function App() {
  dotenv.config();
  return (
    <>
      <div className="app">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
