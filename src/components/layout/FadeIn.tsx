import { motion } from "framer-motion";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}

export function FadeIn({ children, delay = 0, y = 20, className }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, ease: "easeOut", delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
