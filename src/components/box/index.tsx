import React, { ReactNode } from "react";
import styles from "./index.module.css";
import cn from "classnames";
type BoxStyleType = "main" | "detail";

interface BoxProps {
  children: ReactNode;
  styleType: BoxStyleType;
}

const Box = ({ children, styleType }: BoxProps) => {
  const getStyleType = () => {
    if (!styleType) return;

    switch (styleType) {
      case "main":
        return styles.main;
      case "detail":
        return styles.detail;
      default:
        return;
    }
  };

  return <div className={cn( getStyleType())}>{children}</div>;
};

export default Box;
