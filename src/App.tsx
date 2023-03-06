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
      <JotaiProvider>
        <Navbar />
        <div className="main">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/details/:id" element={<AnimeDetails />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </JotaiProvider>
    </div>
  );
}

export default App;
