import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider as JotaiProvider } from "jotai";

import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import AnimeDetails from "./components/AnimeDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <JotaiProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/details/:id" element={<AnimeDetails />} />
          </Routes>
          <Footer />
        </JotaiProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
