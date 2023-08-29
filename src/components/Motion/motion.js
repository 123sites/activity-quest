import { motion } from "framer-motion";
import "../../styles.css";

export const MyComponent = ({ isVisible }) => (
  <motion.div animate={{ opacity: isVisible ? 1 : 0 }} />
);
