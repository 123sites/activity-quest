import { motion } from "framer-motion";
import "../../styles.css";
import "./index.js";

export const Motion = ({ isVisible }) => (
  <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
);
