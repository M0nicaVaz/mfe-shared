import React from "react";
import styles from "./styles.module.scss";

type ButtonProps = {
  label: string;
  priority?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  disabled?: boolean;
  reverse?: boolean;
};

export function Button({
  label,
  priority = "primary",
  size = "medium",
  reverse = false,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[priority]} ${
        disabled ? styles.disabled : ""
      } ${styles[size]} ${reverse ? styles.reverse : ""}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
