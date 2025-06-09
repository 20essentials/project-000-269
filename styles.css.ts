// styles.css.ts
import { style, keyframes } from "@vanilla-extract/css";

const rotar = keyframes({
  "0%": {
    transform: "rotateX(0deg) rotateY(0deg)",
  },
  "100%": {
    transform: "rotateX(359deg) rotateY(359deg)",
  },
});

const rotarInterno = keyframes({
  "0%": {
    transform:
      "translate(-45%, -50%) translateZ(calc(var(--size) * -1.1)) rotateX(0deg) rotateY(0deg)",
  },
  "100%": {
    transform:
      "translate(-45%, -50%) translateZ(calc(var(--size) * -1.1)) rotateX(359deg) rotateY(359deg)",
  },
});

export const globalStyles = style({
  selectors: {
    "*, *::after, *::before": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      WebkitTapHighlightColor: "transparent",
    },
    html: {
      scrollBehavior: "smooth",
      scrollbarWidth: "thin",
      scrollbarColor: "white transparent",
    },
    body: {
      height: "100dvh",
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      placeContent: "center",
      backgroundColor: "#000",
      transformStyle: "preserve-3d",
      perspective: "10000px",
      overflow: "hidden",
    },
  },
});

export const containerCube = style({
  width: "var(--size)",
  height: "var(--size)",
  position: "relative",
  transformStyle: "preserve-3d",
  perspective: "10000px",
  animation: `${rotar} 8s linear infinite alternate`,
  zoom: 0.5,
  '@media': {
    '(width <= 1111px)': {
      zoom: 0.3,
    },
  },
});

export const container = style({
  width: "150px",
  height: "120px",
  position: "absolute",
  animation: `${rotarInterno} 8s linear infinite alternate both`,
  transformStyle: "preserve-3d",
  left: "50%",
  top: "50%",
  perspective: "10000px",
  zoom: 0.5,
});

export const containerPause = style({
  animationPlayState: "paused",
});

export const base = style({
  width: "100%",
  height: "100%",
  position: "absolute",
  transformStyle: "preserve-3d",
  perspective: "10000px",
});

export const baseBottom = style({
  bottom: 0,
});

export const baseTop = style({
  top: 0,
  transform: "translateZ(120px) scaleZ(-1)",
});

export const center = style({});

export const centerTop = style({
  transformOrigin: "50% 50%",
  transform: "translateZ(120px) scaleZ(-1)",
});

export const side = style({
  width: "100%",
  height: "100%",
  clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
  position: "absolute",
  transformOrigin: "50% 100%",
});

export const sideBefore = style({
  content: "''",
  position: "absolute",
  display: "block",
  width: "100%",
  height: "100%",
  inset: 0,
  pointerEvents: "none",
  clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
  backgroundImage: "linear-gradient(to right bottom, gold, mediumpurple, cyan)",
  filter: "blur(20px)",
});

export const cubeSide = style({
  width: "100%",
  height: "100%",
  position: "absolute",
  backgroundColor: "transparent",
  boxShadow: "inset 0 0 80px #fff8",
});

export const cubeSideBehind = style({
  transform: "translateZ(calc(-1 * var(--size)))",
});

export const cubeSideRight = style({
  transformOrigin: "100% 0",
  transform: "rotateY(-90deg)",
});

export const cubeSideLeft = style({
  transformOrigin: "0% 0",
  transform: "rotateY(90deg)",
});

export const cubeSideTop = style({
  transformOrigin: "50% 0",
  transform: "rotateX(-90deg)",
});

export const cubeSideBottom = style({
  transformOrigin: "50% 100%",
  transform: "rotateX(90deg)",
});

