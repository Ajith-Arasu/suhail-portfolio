import './global.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
