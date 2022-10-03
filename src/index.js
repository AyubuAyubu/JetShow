import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import OurJet from "./components/OurJet";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <OurJet />
  </React.StrictMode>
);
