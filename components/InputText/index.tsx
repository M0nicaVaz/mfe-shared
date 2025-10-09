"use client";

import React from "react";
import styles from "./styles.module.scss";

type InputTextProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string | null;
  isError?: boolean;
  labelText?: string;
  type?: React.HTMLInputTypeAttribute;
};

export function InputText({
  name,
  value,
  onChange,
  placeholder = "",
  disabled = false,
  errorMessage = "",
  isError = false,
  labelText = "",
  type = "text",
}: InputTextProps) {
  const inputId = `${name}-input`;

  return (
    <div className={styles.inputContainer}>
      {labelText && (
        <label htmlFor={inputId} className={styles.label}>
          {labelText}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        aria-invalid={isError}
        aria-describedby={isError ? `${inputId}-error` : undefined}
        className={`${styles.input} ${isError ? styles.error : ""}`}
      />

      {isError && (
        <span id={`${inputId}-error`} className={styles.errorMessage}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}
