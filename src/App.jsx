import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import AddPage from "./pages/AddPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>
          <a href="/">Aplikasi Catatan</a>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
