import { IconButton, Link, Flex, Box, Button } from "@chakra-ui/react";
import { FiCode, FiHome, FiList, FiMenu, FiSearch } from "react-icons/fi";

function NavMenu() {
  return (
    <Box>
      <Flex gap={2}>
        <Link href="/" _hover={{ textDecoration: "none" }}>
          <IconButton aria-label="Go to home page" icon={<FiHome />}>
            Home
          </IconButton>
        </Link>
        <Link href="/list" _hover={{ textDecoration: "none" }}>
          <IconButton aria-label="Go to anime list" icon={<FiList />}>
            List
          </IconButton>
        </Link>
        <Link href="/search" _hover={{ textDecoration: "none" }}>
          <IconButton aria-label="Go to search page" icon={<FiSearch />}>
            Search
          </IconButton>
        </Link>
        <Link
          href="https://github.com/dairsmithgit/sleecelist"
          _hover={{ textDecoration: "none" }}
          isExternal
        >
          <IconButton aria-label="Go to source code" icon={<FiCode />}>
            Source
          </IconButton>
        </Link>
      </Flex>
    </Box>
  );
}

export default NavMenu;
