import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";
import { buttonRecipe } from "./button.recipe";

const config = defineConfig({
  globalCss: {
    "html, body": {
      // backgroundColor: "green.100",
    },
    html: {
      colorPalette: "blue",
    },
  },
  theme: {
    recipes: {
      button: buttonRecipe,
    },
    tokens: {
      colors: {
        blue: {
          "50": { value: "#ebf8ff" },
          "100": { value: "#bee3f8" },
          "200": { value: "#90cdf4" },
          "300": { value: "#63b3ed" },
          "400": { value: "#4299e1" },
          "500": { value: "#3182ce" },
          "600": { value: "#2b6cb0" },
          "700": { value: "#2c5282" },
          "800": { value: "#2a4365" },
          "900": { value: "#1A365D" },
        },
        gray: {
          "50": { value: "#F7FAFC" },
          "100": { value: "#EDF2F7" },
          "200": { value: "#E2E8F0" },
          "300": { value: "#CBD5E0" },
          "400": { value: "#A0AEC0" },
          "500": { value: "#718096" },
          "600": { value: "#4A5568" },
          "700": { value: "#2D3748" },
          "800": { value: "#1A202C" },
          "900": { value: "#171923" },
        },
        red: {
          "50": { value: "#FFF5F5" },
          "100": { value: "#FED7D7" },
          "200": { value: "#FEB2B2" },
          "300": { value: "#FC8181" },
          "400": { value: "#F56565" },
          "500": { value: "#E53E3E" },
          "600": { value: "#C53030" },
          "700": { value: "#9B2C2C" },
          "800": { value: "#822727" },
          "900": { value: "#63171B" },
        },
        yellow: {
          "50": { value: "#FFFFF0" },
          "100": { value: "#FEFCBF" },
          "200": { value: "#FAF089" },
          "300": { value: "#F6E05E" },
          "400": { value: "#ECC94B" },
          "500": { value: "#D69E2E" },
          "600": { value: "#B7791F" },
          "700": { value: "#975A16" },
          "800": { value: "#744210" },
          "900": { value: "#5F370E" },
        },
        green: {
          "50": { value: "#F0FFF4" },
          "100": { value: "#C6F6D5" },
          "200": { value: "#9AE6B4" },
          "300": { value: "#68D391" },
          "400": { value: "#48BB78" },
          "500": { value: "#38A169" },
          "600": { value: "#2F855A" },
          "700": { value: "#276749" },
          "800": { value: "#22543D" },
          "900": { value: "#1C4532" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
