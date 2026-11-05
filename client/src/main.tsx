import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;
// Pages are pre-filled with their content at build time (scripts/prerender.mjs).
// When that content is there, React picks it up in place instead of redrawing the page.
if (container.firstElementChild) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
