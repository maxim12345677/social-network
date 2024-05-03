import React from "react";

/* import FormInformer from "../informer"; */

import cn from "classnames";

import s from "./Input.module.scss";

const Input = (props: any) => {
  const {
    autoComplete = "off",
    autoFocus = false,
    className,
    disabled = false,
    isError,
    inputMode,
    mask,
    maxLength,
    name,
    onClick,
    placeholder,
    tooltip,
    warning,
    inputRef,
    isDisabled,
    handleFocus,
    handleBlur,
    onChange,
    value,
  } = props;

  const hasFocus = true;

  if (mask) {
    return <div>Masked input</div>;
  }

  return (
    <div className={s.root}>
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        className={cn(s.input, className)}
        autoComplete={autoComplete}
        disabled={isDisabled}
        name={name}
        onClick={onClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        maxLength={maxLength}
        value={value}
        type="text"
        inputMode={inputMode}
        placeholder={hasFocus && placeholder ? placeholder : ""}
        autoFocus={autoFocus}
      />

      {/* {!disabled && (
        <Informer
          isError={isError}
          tooltip={tooltip}
          isWarning={isWarning}
        />
      )} */}
    </div>
  );
};

export default Input;
