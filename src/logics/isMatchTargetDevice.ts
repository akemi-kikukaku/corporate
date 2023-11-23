import { WindowWidthType } from "types/windowWidthType";

const isMatchTargetDevice = (width: number, target: WindowWidthType) => {
  const type: WindowWidthType = width < 600 ? 'SM' : width <= 1024 ? 'MD' : 'LG';
  return type === target;
};

export const isBelowSm = (width: number) => {
  return width < 600;
};

export const isBelowMd = (width: number) => {
  return width <= 1024;
};

export default isMatchTargetDevice;
