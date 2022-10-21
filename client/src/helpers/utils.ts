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

type Fm = {
  title: string;
  date: string;
  body: string;
  key?: string;
  filename?: string;
};

const parseFrontMatter = (md: string, file: string) => {
  const reg = /(?<=---)(.*)(?=---)/s;
  const fmAll = /.*[---]/s;
  const fm = {} as Fm;
  // fm.body = md.split(fmAll)[1].trim();
  fm.body = md
    .substring(md.lastIndexOf("---"))
    .trim()
    .split("\n")
    .slice(2)
    .join("\n");
  fm.filename = file;
  const spec = reg.exec(md)![0].trim();
  spec
    .trim()
    .split(/\r?\n|\r|\n/g)
    .forEach((v) => {
      const [key, value] = v.split(":");
      fm[key as keyof typeof fm] = value;
    });
  return fm;
};

const parseFrontMatterAll = (md: string[], file: string[]) => {
  const arr: Fm[] = [];
  md.forEach((md, i) => {
    const data = parseFrontMatter(md, Object.keys(file)[i]);
    arr.push(data);
  });
  return arr;
};

export {
  randomNumber,
  randomNumberDecimal,
  randomColour,
  contrastPicker,
  parseFrontMatter,
  parseFrontMatterAll,
};
