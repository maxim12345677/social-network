import s from "./Typografy.module.scss";
import Clock from "../../../images/clock.svg";
import Email from "../../../images/email.svg";
import Folowers from "../../../images/folowers.svg";
import Info from "../../../images/info.svg";
import Like from "../../../images/like.svg";
import Phone from "../../../images/phone.svg";
import SiteLink from "../../../images/site_link.svg";
import Search from "../../../images/search.svg";

import cn from "classnames";

import { TypographyProps, variantsMapping } from "./types";
import { useMemo } from "react";

const Icons = {
  clock: Clock,
  email: Email,
  folowers: Folowers,
  info: Info,
  like: Like,
  phone: Phone,
  site_link: SiteLink,
  search: Search,
};

type colorsType = "gray" | "blue" | "white" | "light_gray";

/*  type Colors = {
  [colorsEnum.gray]: string;
  [colorsEnum.blue]: string;
  [colorsEnum.white]: string;
  [colorsEnum.light_gray]: string;
};  */

const colors = {
  gray: "var(--facebook-gray)",
  blue: "var(--background-button)",
  white: "var(--background-primary)",
  light_gray: "var(--background-secondary)",
};

export function getColor(colorName: colorsType) {
  return colors[colorName];
}

const Typography = ({
  variant,
  color,
  isBold,
  textAlign = "initial",
  classes,
  children,
  icon,
  type,
  href,
  ...props
}: TypographyProps) => {
  if (!children) return null;

  const Tag = variantsMapping[variant] || "div";

  const titleColorFromCode = useMemo(() => getColor(color), [color]);

  const Icon = Icons[icon as keyof typeof Icons];

  return (
    <>
      <Tag
        className={cn(s.root, s[variant], classes.root, {
          [s.bold]: isBold,
          [s.textAlign]: textAlign,
        })}
        style={{
          color: color && titleColorFromCode,
          textAlign,
        }}
        {...props}
      >
        {icon && <Icon className={s.icon} />} {children}
      </Tag>
    </>
  );
};

export default Typography;
