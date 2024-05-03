import { createContext } from "react";

export enum ThemesEnum {
  light = "light",
  dark = "dark",
}

export interface ThemeContextProps {
  theme: ThemesEnum;
  setTheme: (theme: ThemesEnum) => void;
}

//@ts-ignore
export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = "theme";
