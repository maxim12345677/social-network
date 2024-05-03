import { useEffect, useMemo, useState } from "react";

import { ButtonProps } from "./types";
import s from "./Button.module.scss";

import cn from "classnames";
import { getColor } from "../Typografy/Typografy";

const Button = ({
  children,
  type = "button",
  rightAddons,
  leftAddons,
  size = "md",
  href,
  isLoading = false,
  classes = {},
  isDisabled = false,
  isBlock,
  iconOnly,
  color,
  ...restProps
}: ButtonProps) => {
  const [isShowLoader, setIsShowLoader] = useState(false);

  const buttonColor = useMemo(() => getColor(color), [color]);

  const buttonChildren = useMemo(
    () => (
      <>
        {leftAddons && <span className={s.icon}>{leftAddons}</span>}
        {children && <span className={s.text}>{children}</span>}
        {rightAddons && <span className={s.icon}>{rightAddons}</span>}
        {isShowLoader && (
          <div className={s.root__loader_container}>Loading...</div>
        )}
      </>
    ),
    [children, leftAddons, rightAddons, isShowLoader]
  );

  useEffect(() => {
    if (isLoading) {
      setIsShowLoader(true);
    }

    let timeout: number;

    if (!isLoading && isShowLoader) {
      timeout = window.setTimeout(() => {
        setIsShowLoader(false);
      }, 400);
    }

    return () => {
      if (timeout) {
        window.clearTimeout(timeout);
      }
    };
  }, [isLoading, isShowLoader]);

  if (href) {
    return <a href={href}>{buttonChildren}</a>;
  }

  return (
    <button
      {...restProps}
      type={type}
      disabled={isDisabled || isShowLoader}
      className={cn(s.root, classes.root, {
        [s.block]: isBlock,
        [s.icon_only]: iconOnly,
      })}
      style={{
        color: color && buttonColor,
      }}
    >
      {buttonChildren}
    </button>
  );
};

export default Button;
