import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider as JotaiProvider } from "jotai";

import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import AnimeDetails from "./components/AnimeDetails";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <JotaiProvider>
        <BrowserRouter>
          <Navbar />
          <Box pt="62px">
            <Routes>
              <Route path="/" element={<Feed />} />
              <Route path="/details/:id" element={<AnimeDetails />} />
              <Route path="/list" element={<List />} />
            </Routes>
          </Box>
          <Footer />
        </BrowserRouter>
      </JotaiProvider>
    </div>
  );
}

export default App;
