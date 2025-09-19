import React from "react";
import styles from "./styles.module.scss";
import { ExpandMore } from "@mui/icons-material";

export interface InputSelectProps {
  name: string;
  labelText?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  disabled?: boolean;
}

export function InputSelect({
  labelText,
  value,
  name = "",
  onChange,
  options,
  placeholder,
  disabled = false,
}: InputSelectProps) {
  return (
    <div className={styles.inputSelectContainer}>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <div className={styles.selectWrapper}>
        <select
          name={name}
          className={styles.select}
          value={value}
          onChange={onChange}
          disabled={disabled}
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
    </div>
  );
}
