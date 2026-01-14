import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppRoutes } from "./Routes.jsx";
import { Footer } from "./modules/footer/footer.jsx";
import { ShowFormProvider } from "./context/showForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShowFormProvider>
      <AppRoutes>
        <App />
      </AppRoutes>
    </ShowFormProvider>
  </StrictMode>
);
