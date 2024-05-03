import { ThemesEnum } from "app/provider/ThemeProvider/lib/ThemeContext";
/// убрать в шеред

import React, { ElementType } from "react";

export type ButtonVariantType =
  | "primary"
  | "secondary"
  | "tertiary"
  | "ghost"
  | "link";

export type ButtonThemeType = ThemesEnum;

type OmitButtonAttributes = "disabled";

export type ButtonProps = {
  /**
   * Контент
   */
  children?: React.ReactNode;
  /**
  /**
   * Дополнительный контент справа
   */
  rightAddons?: React.ReactNode;
  /**
   * Дополнительный контент слева
   */

  color?: "gray" | "blue" | "white" | "light_gray";

  leftAddons?: React.ReactNode;
  /**
   * Размерность кнопки
   */
  size?: "lg" | "md" | "sm" | "xs";
  /**
   * Растягивает компонент на ширину контейнера
   */
  isBlock?: boolean;
  /**
   * При наличии ссылки компонент становится <Link />
   */
  href?: string;
  /**
   * Показать лоадер
   */
  isLoading?: boolean;
  /**
   * Отключает кнопку
   */
  isDisabled?: boolean;
  /**
   * Дополнительные классы для стилизации
   */
  iconOnly?: boolean;

  classes?: {
    root?: string;
    text?: string;
    addons?: string;
    block?: string;
    circle?: string;
    iconOnly?: string;
    loading?: string;
    active?: string;
    disabled?: string;
    block_on_mobile?: string;
  };
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, OmitButtonAttributes>;
