// ---------------------------------------
// "XUI"
// Created by Vikas Kumar (@viktapas)
// © KredX (Minions Ventures Pvt. Ltd.)
// ---------------------------------------

import React, { ReactNode } from "react"
import { MantineProvider, MantineTheme, MantineThemeOverride } from '@mantine/core';
import { themeOverride } from "./theme.config";
import { CustomFonts } from "../utils/customFonts";

interface IThemeProvider {
  children: any;
  theme?: MantineThemeOverride;
  withGlobalStyles?:boolean;
  withNormalizeCSS?:boolean;
  customFonts?:boolean;
}

// Custom theme is applied to all components in App
const KredXThemeProvider = (props:IThemeProvider):ReactNode => {
    const {children, theme={}, withGlobalStyles, withNormalizeCSS, customFonts} = props
    return (
      <MantineProvider
        theme={{...themeOverride, ...theme}}
        withGlobalStyles={withGlobalStyles}
        withNormalizeCSS={withNormalizeCSS}>
          {customFonts && <CustomFonts/>}
        {children}
      </MantineProvider>
    );
  }

export {KredXThemeProvider}