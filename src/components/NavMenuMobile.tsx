import {
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiCode, FiHome, FiList, FiMenu, FiSearch } from "react-icons/fi";

const NavMenuMobile = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<FiMenu />} variant="outlined" />
      <MenuList>
        <Link href="/" _hover={{ textDecoration: "none" }}>
          <MenuItem icon={<FiHome />}>Home</MenuItem>
        </Link>
        <Link href="/list" _hover={{ textDecoration: "none" }}>
          <MenuItem icon={<FiList />}>List</MenuItem>
        </Link>
        <Link href="/search" _hover={{ textDecoration: "none" }}>
          <MenuItem icon={<FiSearch />}>Search</MenuItem>
        </Link>
        <Link
          href="https://github.com/dairsmithgit/sleecelist"
          _hover={{ textDecoration: "none" }}
          isExternal
        >
          <MenuItem icon={<FiCode />}>Source</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default NavMenuMobile;
