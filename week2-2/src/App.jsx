import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Movies from "./pages/MoviesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default App;
