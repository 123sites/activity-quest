import React, { useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        id="loginbox"
        exit={{ opacity: 0, y: 30 }}
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.div>
    </>,
    document.getElementById("modal")
  );
}
