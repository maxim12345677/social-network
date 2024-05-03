export type TypographyVariantType = "h2" | "h3" | "p1" | "p2" | "p3";

export type TypographyTagType = "h2" | "h3" | "p" | "li";

export const variantsMapping: Record<string, TypographyTagType> = {
  h2: "h2",
  h3: "h3",
  p1: "p",
  p2: "p",
  p3: "p",
};

export type TypographyProps = React.AllHTMLAttributes<HTMLElement> & {
  /** Вариации текста/заголовков взятые из дизайн-системы */
  variant: TypographyVariantType;
  /** Проп для вставки кастомного тега, например span */
  forceTag?: TypographyTagType;
  /** Цвет текста, передается в формате "red--40" или "red, 40" или "red" (где red цвет из палитры, а 40 - это тональность цвета) */
  color?: "gray" | "blue" | "white" | "light_gray";
  /** Включает css переменные */
  isCssVarsEnabled?: boolean;
  /** Признак bold */
  isBold?: boolean;
  /** Признак demi-bold */
  isDemiBold?: boolean;
  /** Выравнивание текста */
  textAlign?: "left" | "center" | "right" | "initial";
  /** Значения, которые будут применяться на мобильном брейкпоинте. Для редких случаев */
  mobileProps?: {
    fontSize?: number;
    lineHeight?: number;
    textAlignMob?: string;
  };
  classes?: {
    root?: string;
    subtitle?: string;
  };
  /** Текст заголовка */
  children?: React.ReactNode;
  /** Текст подзаголовка */
  subtitle?: string | React.ReactNode;
  /** Цвет подзаголовка, передается в формате "red--40" или "red, 40" или "red" (где red цвет из палитры, а 40 - это тональность цвета) */
  subtitleColor?: string;
  // иконка
  icon?: string;

  type?: "link" | "email" | "phone";

  href?: string;
};
