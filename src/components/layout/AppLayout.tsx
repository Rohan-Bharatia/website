import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

const pageVariants = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -16 },
};
const pageTransition = {
    duration: 0.22,
    ease: "easeInOut" as const,
};

export function AppLayout() {
    const location = useLocation();

    return (
        <TooltipProvider>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            variants={pageVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={pageTransition}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </main>
                <Footer />
            </div>
            <Toaster />
        </TooltipProvider>
    );
}
