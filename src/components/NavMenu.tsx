import { IconButton, Flex, Box, Button } from "@chakra-ui/react";
import { FiCode, FiHome, FiList, FiMenu, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

function NavMenu() {
  return (
    <Box>
      <Flex gap={2} transition="all 1s ease-in-out">
        <Link to="/">
          <IconButton
            aria-label="Go to home page"
            icon={<FiHome />}
            _hover={{ textDecoration: "none", transform: "scale(1.1)" }}
          >
            Home
          </IconButton>
        </Link>
        <Link to="/list">
          <IconButton
            aria-label="Go to anime list"
            icon={<FiList />}
            _hover={{ textDecoration: "none", transform: "scale(1.1)" }}
          >
            List
          </IconButton>
        </Link>
        <Link to="/search">
          <IconButton
            aria-label="Go to search page"
            icon={<FiSearch />}
            _hover={{ textDecoration: "none", transform: "scale(1.1)" }}
          >
            Search
          </IconButton>
        </Link>
        <Link to="https://github.com/dairsmithgit/sleecelist">
          <IconButton
            aria-label="Go to source code"
            icon={<FiCode />}
            _hover={{ textDecoration: "none", transform: "scale(1.1)" }}
          >
            Source
          </IconButton>
        </Link>
      </Flex>
    </Box>
  );
}

export default NavMenu;
