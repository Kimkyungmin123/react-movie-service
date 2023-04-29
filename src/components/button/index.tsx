import { MouseEventHandler, ReactNode } from "react";
import styles from "./index.module.css";
import cn from "classnames";

type ButtonStyle = "main" | "clear";

interface ButtonProps {
  buttonStyle?: ButtonStyle;
  onClick: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  ariaLabel?: string;
  disabled: boolean;
}

const Button = ({
  onClick,
  children,
  ariaLabel,
  disabled,
  buttonStyle,
}: ButtonProps) => {
  const getStyleType = () => {
    if (!buttonStyle) return;

    switch (buttonStyle) {
      case "main":
        return styles.main;
      case "clear":
        return styles.clear;
      default:
        return;
    }
  };

  return (
    <button
      className={cn(getStyleType())}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
