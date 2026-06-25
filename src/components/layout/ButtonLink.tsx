import { Link } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
    to: string;
    className?: string;
    children: React.ReactNode;
}

export function ButtonLink({
    to,
    className,
    children,
    variant = "default",
    size = "default",
}: ButtonLinkProps) {
    return (
        <Link
            to={to}
            className={cn(buttonVariants({ variant, size }), className)}
        >
            {children}
        </Link>
    );
}
