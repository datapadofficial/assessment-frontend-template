import Color from "color";

const createPalette = function createPalette(color: any, length: number) {
  const colors = [];

  let nextColor = color;
  const step = 1 / length;

  for (let i = 0; i < length; i++) {
    colors.push(nextColor.string());
    nextColor = nextColor.fade(step);
  }

  return colors;
};

const colors = {
  BLUE: {
    accent: Color("rgb(47, 80, 193)"),
    softClass: "blue-200",
    hardClass: "blue-500",
  },
  PURPLE: {
    accent: Color("rgb(152, 0, 82)"),
    softClass: "purple-200",
    hardClass: "purple-500",
  },
  RED: {
    accent: Color("rgb(209, 32, 48)"),
    softClass: "red-200",
    hardClass: "red-500",
  },
  ORANGE: {
    accent: Color("rgb(219, 126, 33)"),
    softClass: "orange-200",
    hardClass: "orange-500",
  },
  YELLOW: {
    accent: Color("rgb(255, 190, 98)"),
    softClass: "yellow-200",
    hardClass: "yellow-400",
  },
  GREEN: {
    accent: Color("rgb(20, 158, 83)"),
    softClass: "green-200",
    hardClass: "green-500",
  },
};

export { colors, colors as default, createPalette };
