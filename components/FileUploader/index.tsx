"use client";

import { useRef, useState } from "react";
import { Button } from "../Button";
import styles from "./styles.module.scss";

interface FileUploaderProps {
  onFileSelect?: (file: File) => void;
}

export function FileUploader({ onFileSelect }: FileUploaderProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setFileName(file.name);
      onFileSelect?.(file);
    }
  };

  return (
    <div className={styles.container}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*,.pdf"
        className={styles.fileInput}
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <Button
        label="Adicionar anexo"
        size="small"
        onClick={handleClick}
        priority="secondary"
      />
      {fileName && <span className={styles.fileName}>{fileName}</span>}
    </div>
  );
}
