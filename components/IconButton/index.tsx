"use client";

import React from "react";
import styles from "./styles.module.scss";

type IconButtonProps = {
  icon: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  priority?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  ariaLabel?: string;
};

export function IconButton({
  icon,
  onClick,
  priority = "primary",
  disabled = false,
  size = "medium",
  ariaLabel = "",
}: IconButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      className={`${styles.iconButton} ${styles[priority]} ${styles[size]} ${
        disabled ? styles.disabled : ""
      }`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
}
