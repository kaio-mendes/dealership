import "./App.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { HomePage } from "./pages/home";
import { Footer } from "./modules/footer/footer";
import { AppRoutes } from "./Routes";

function App() {
  return (
    <>
      <div className="app">
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
