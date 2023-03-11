import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FiCode, FiHome, FiList, FiMenu, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavMenuMobile = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<FiMenu />} variant="outlined" />
      <MenuList>
        <Link to="/">
          <MenuItem icon={<FiHome />}>Home</MenuItem>
        </Link>
        <Link to="/list">
          <MenuItem icon={<FiList />}>List</MenuItem>
        </Link>
        <Link to="/search">
          <MenuItem icon={<FiSearch />}>Search</MenuItem>
        </Link>
        <Link to="https://github.com/dairsmithgit/sleecelist">
          <MenuItem icon={<FiCode />}>Source</MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default NavMenuMobile;
