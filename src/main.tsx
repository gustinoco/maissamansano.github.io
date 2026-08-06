import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initGoogleAdsTracking } from "./googleAdsTracking.js";

initGoogleAdsTracking();

createRoot(document.getElementById("root")!).render(<App />);
