import React from "react";
import styles from "./styles.module.scss";

type InputTextProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  isError?: boolean;
  labelText?: string;
};

export function InputText({
  value,
  onChange,
  placeholder = "",
  disabled = false,
  errorMessage = "",
  isError = false,
  labelText = "",
}: InputTextProps) {
  return (
    <div className={styles.inputContainer}>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        className={`${styles.input} ${isError ? styles.error : ""}`}
      />
      {isError && <span className={styles.errorMessage}>{errorMessage}</span>}
    </div>
  );
}
