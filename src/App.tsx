import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import AnimeDetails from "./components/AnimeDetails";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";
import List from "./components/List";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Box pt="62px">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/details/:id" element={<AnimeDetails />} />
          <Route path="/list" element={<List />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
