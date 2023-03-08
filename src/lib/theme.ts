import { extendTheme } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: StyleFunctionProps | Record<string, any>) => ({
    body: {
      bg: mode("#F7FAFC", "#1A202C")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {},
    },
  },
};

const fonts = {
  heading: `'Lato', sans-serif`,
  body: `'Noto Sans', sans-serif`,
};

const theme = extendTheme({ styles, fonts });

export default theme;
