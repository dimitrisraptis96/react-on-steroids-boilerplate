const colorPalette = {
  primary: "mediumblue",
  secondary: "#f6f6ff",
  white: "#f6f6ff",
  black: "#212121"
};

const theme = {
  dark: {
    colors: {
      primary: "mediumblue",
      secondary: "#f6f6ff",
      white: "#f6f6ff",
      black: "#212121"
    },
    buttons: {
      primary: {
        color: "primary",
        bg: "white"
      },
      outline: {
        color: "primary",
        bg: "transparent",
        boxShadow: "inset 0 0 0 2px"
      }
    },
    background: {
      bg: colorPalette.black,
      color: colorPalette.white
    },
    link: { color: colorPalette.white }
  },
  light: {
    colors: {
      primary: "mediumblue",
      secondary: "#f6f6ff",
      white: "#f6f6ff",
      black: "#212121"
    },
    buttons: {
      primary: {
        color: "white",
        bg: "primary"
      },
      outline: {
        color: "primary",
        bg: "transparent",
        boxShadow: "inset 0 0 0 2px"
      }
    },
    background: {
      bg: colorPalette.white,
      color: colorPalette.black
    },
    link: { color: colorPalette.primary }
  }
};

export default theme;
