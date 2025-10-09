"use client";

import React from "react";
import styles from "./styles.module.scss";
import ExpandMore from "@mui/icons-material/ExpandMore";

export interface InputSelectProps {
  name: string;
  labelText?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  isError?: boolean;
}

export function InputSelect({
  labelText,
  value,
  name,
  onChange,
  options,
  placeholder,
  disabled = false,
  errorMessage,
  isError = false,
}: InputSelectProps) {
  const selectId = `${name}-select`;

  return (
    <div className={styles.inputSelectContainer}>
      {labelText && (
        <label htmlFor={selectId} className={styles.label}>
          {labelText}
        </label>
      )}

      <div className={styles.selectWrapper}>
        <select
          id={selectId}
          name={name}
          className={`${styles.select} ${isError ? styles.error : ""}`}
          value={value}
          onChange={onChange}
          disabled={disabled}
          aria-invalid={isError}
          aria-describedby={isError ? `${selectId}-error` : undefined}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <ExpandMore className={styles.icon} />
      </div>

      {isError && (
        <span id={`${selectId}-error`} className={styles.errorMessage}>
          {errorMessage}
        </span>
      )}
    </div>
  );
}
