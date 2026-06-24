import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
    to: string;
    className?: string;
    children: React.ReactNode;
    variant?: "default" | "outline";
}

export function ButtonLink({
    to,
    className,
    children,
    variant = "default",
}: ButtonLinkProps) {
    return (
        <Link
            to={to}
            className={cn(
                "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition",
                variant === "default" &&
                "bg-primary text-primary-foreground hover:opacity-90",
                variant === "outline" &&
                "border border-border hover:bg-muted",
                className
            )}
        >
            {children}
        </Link>
    );
}
