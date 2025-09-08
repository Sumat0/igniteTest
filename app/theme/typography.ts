// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native"
import {
  Alexandria_300Light as alexandriaLight,
  Alexandria_400Regular as alexandriaRegular,
  Alexandria_500Medium as alexandriaMedium,
  Alexandria_600SemiBold as alexandriaSemiBold,
  Alexandria_700Bold as alexandriaBold,
} from "@expo-google-fonts/alexandria"

export const customFontsToLoad = {
  alexandriaLight,
  alexandriaRegular,
  alexandriaMedium,
  alexandriaSemiBold,
  alexandriaBold,
}

const fonts = {
  alexandria: {
    // Cross-platform Google font.
    light: "alexandriaLight",
    normal: "alexandriaRegular",
    medium: "alexandriaMedium",
    semiBold: "alexandriaSemiBold",
    bold: "alexandriaBold",
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
  courier: {
    // iOS only font.
    normal: "Courier",
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
  monospace: {
    // Android only font.
    normal: "monospace",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.alexandria,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
}
