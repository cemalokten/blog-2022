const randomNumber = (min: number, max: number) => {
  return Math.round(Math.random() * (max - min) + min);
};

const randomNumberDecimal = (min: number, max: number) => {
  return Number((Math.random() * (max - min) + min).toFixed(2));
};

const randomColour = (colors: string[]): string => {
  return colors[randomNumber(0, colors.length - 1)];
};

const cutHex = (h: string) => {
  return h.charAt(0) == "#" ? h.substring(1, 7) : h;
};
const hexToR = (h: string) => {
  return parseInt(cutHex(h).substring(0, 2), 16);
};
const hexToG = (h: string) => {
  return parseInt(cutHex(h).substring(2, 4), 16);
};
const hexToB = (h: string) => {
  return parseInt(cutHex(h).substring(4, 6), 16);
};

const contrastPicker = (color: string): "#000000" | "#ffffff" => {
  const r = hexToR(color);
  const g = hexToG(color);
  const b = hexToB(color);
  const result =
    r * 0.299 + g * 0.587 + b * 0.114 > 146 ? "#000000" : "#ffffff";
  return result;
};

export { randomNumber, randomNumberDecimal, randomColour, contrastPicker };
