import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiCode, FiHome, FiList, FiMenu, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavMenuMobile = () => {
  return (
    <Menu closeOnBlur closeOnSelect>
      <MenuButton as={IconButton} icon={<FiMenu />} variant="menu" />
      <MenuList
        border="1px"
        borderRadius="none"
        bg={useColorModeValue("brand.100", "brand.900")}
      >
        <Link to="/">
          <MenuItem
            marginY={1}
            bg={useColorModeValue("brand.100", "brand.900")}
            _hover={{ color: "brand.300" }}
            icon={<FiHome />}
          >
            Home
          </MenuItem>
        </Link>
        <Link to="/list">
          <MenuItem
            marginY={1}
            bg={useColorModeValue("brand.100", "brand.900")}
            _hover={{ color: "brand.300" }}
            icon={<FiList />}
          >
            List
          </MenuItem>
        </Link>
        <Link to="/search">
          <MenuItem
            marginY={1}
            bg={useColorModeValue("brand.100", "brand.900")}
            _hover={{ color: "brand.300" }}
            icon={<FiSearch />}
          >
            Search
          </MenuItem>
        </Link>
        <Link to="https://github.com/dairsmithgit/sleecelist">
          <MenuItem
            marginY={1}
            bg={useColorModeValue("brand.100", "brand.900")}
            _hover={{ color: "brand.300" }}
            icon={<FiCode />}
          >
            Source
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default NavMenuMobile;
