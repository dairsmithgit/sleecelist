import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import AnimeDetails from "./components/AnimeDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/details" element={<AnimeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
