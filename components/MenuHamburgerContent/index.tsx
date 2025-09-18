"use client";

import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

interface MenuHamburguerProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

export default function MenuHamburgerContent({
  isOpen,
  onClose,
  content,
}: MenuHamburguerProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menuBox} ref={menuRef}>
        {content}
      </div>
    </div>
  );
}
