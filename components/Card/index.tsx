"use client";

import React from "react";
import styles from "./styles.module.scss";

type CardProps = {
  title?: string;
  children?: React.ReactNode;
  color?: "primary" | "secondary";
  action?: () => void;
  actionIcon?: React.ReactNode;
};

export function Card({ title, children, color = "primary", action, actionIcon }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.header}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {action && actionIcon && (
          <div className={styles.action} onClick={action}>{actionIcon}</div>
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
