import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: StyleFunctionProps | Record<string, any>) => ({
    body: {
      bg: mode("brand.100", "brand.900")(props),
    },
  }),
};

const colors = {
  brand: {
    100: "#f5f5f5", // white smoke
    200: "#d3d3d3", // timberwolf
    300: "#0064ff", // neon blue
    400: "#0000ff", // blue
    500: "#ff0000", // red
    600: "#8b0000", // dark red
    700: "#71797e", // gray
    800: "#3b444b", // charcoal
    900: "#0f0f0f", // night
  },
};

const components = {
  Heading: {
    variants: {
      title: {
        fontSize: 20,
        _hover: { color: "brand.300" },
      },
    },
  },
  Button: {
    variants: {
      action: {
        rounded: "none",
        border: "1px",
        _hover: { color: "brand.300", transform: "scale(1.1)" },
      },
      menu: {
        rounded: "none",
        border: "1px",
        _hover: { color: "brand.300", marginX: 4 },
      },
    },
  },
};

const fonts = {
  heading: `'Lato', sans-serif`,
  body: `'Noto Sans', sans-serif`,
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme;
