import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "semibold",
  },
  variants: {
    variant: {
      outline: { bg: "white", borderColor: "colorPalette.solid" },
    },
  },
});
