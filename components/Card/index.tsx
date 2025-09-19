import React from "react";
import styles from "./styles.module.scss";

type CardProps = {
  title?: string;
  children?: React.ReactNode;
  color?: "primary" | "secondary";
};

export function Card({ title, children, color = "primary" }: CardProps) {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
