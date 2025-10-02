import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-6 text-center text-slate-500 dark:text-slate-400"
    >
      © {new Date().getFullYear()} Neil’s Portfolio. All rights reserved.
    </motion.footer>
  );
}
