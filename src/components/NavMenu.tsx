import { IconButton, Flex, Box, Button } from "@chakra-ui/react";
import { FiCode, FiHome, FiList, FiMenu, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

function NavMenu() {
  return (
    <Box>
      <Flex gap={2} transition="all 1s ease-in-out">
        <Link to="/">
          <IconButton
            variant="menu"
            aria-label="Go to home page"
            icon={<FiHome />}
          >
            Home
          </IconButton>
        </Link>
        <Link to="/list">
          <IconButton
            variant="menu"
            aria-label="Go to anime list"
            icon={<FiList />}
          >
            List
          </IconButton>
        </Link>
        <Link to="/search">
          <IconButton
            variant="menu"
            aria-label="Go to search page"
            icon={<FiSearch />}
          >
            Search
          </IconButton>
        </Link>
        <Link to="https://github.com/dairsmithgit/sleecelist">
          <IconButton
            variant="menu"
            aria-label="Go to source code"
            icon={<FiCode />}
          >
            Source
          </IconButton>
        </Link>
      </Flex>
    </Box>
  );
}

export default NavMenu;
