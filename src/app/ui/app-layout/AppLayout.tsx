import React from "react";

import { LayoutProps } from "./types";

import s from "./AppLayout.module.scss";

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <div className={s.root}>
      <main className={s.content}>{children}</main>
    </div>
  );
};

export default AppLayout;
