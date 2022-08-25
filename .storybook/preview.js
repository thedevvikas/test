// ---------------------------------------
// "XUI"
// Created by Vikas Kumar (@viktapas)
// © KredX (Minions Ventures Pvt. Ltd.)
// ---------------------------------------

// export const parameters = {
//   actions: { argTypesRegex: "^on[A-Z].*" },
//   controls: {
//     matchers: {
//       color: /(background|color)$/i,
//       date: /Date$/,
//     },
//   },
// }

import React from "react";
import { addDecorator } from "@storybook/react";
import { KredXThemeProvider } from '../src/theme/ThemeProvider';

// Theme Provider =====================
addDecorator( story =>
  <KredXThemeProvider
    withCSSVariables
    withGlobalStyles
    withNormalizeCSS
    customFonts
  >
    {story()}
  </KredXThemeProvider>
);


/**
 * Storybook theme config for Mantine Theme
 */
// import { mantineTheme } from "storybook-addon-mantine";
// // import { lightTheme } from "../themes/light";

// // These props are passed to the MantineProvider used by all stories.
// const mantineProviderProps = {
//   withCSSVariables: false,
//   withGlobalStyles: true,
//   withNormalizeCSS: false,
// };

// export const decorators = [
//   mantineTheme(
//     [
//       { ...theme, themeName: "Light Mode" },
//       {
//         themeName: "Dark Mode - Green",
//         primaryColor: "green",
//         colorScheme: "dark",
//         radius: 0,
//       },
//     ],
//     mantineProviderProps
//   ),
// ];