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

export function Card({
  title,
  children,
  color = "primary",
  action,
  actionIcon,
}: CardProps) {
  return (
    <div
      className={`${styles.card} ${styles[color]}`}
      aria-labelledby={title ? "card-title" : undefined}
    >
      <div className={styles.header}>
        {title && (
          <h2 id="card-title" className={styles.title} tabIndex={0}>
            {title}
          </h2>
        )}
        {action && actionIcon && (
          <button className={styles.action} onClick={action} aria-label="Ação">
            {actionIcon}
          </button>
        )}
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
