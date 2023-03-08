import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider as JotaiProvider } from "jotai";

import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import AnimeDetails from "./components/AnimeDetails";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <JotaiProvider>
        <Navbar />
        <Box pt="62px">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/details/:id" element={<AnimeDetails />} />
            </Routes>
          </BrowserRouter>
        </Box>
        <Footer />
      </JotaiProvider>
    </div>
  );
}

export default App;
