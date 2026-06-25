import { Link, NavLink } from "react-router";
import { MenuIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const links = [
    { to: "/", label: "Home", end: true },
    { to: "/about", label: "About", end: false },
    { to: "/portfolio", label: "Portfolio", end: false },
    { to: "/resume", label: "Resume", end: false },
    { to: "/contact", label: "Contact", end: false },
];

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <Container className="flex h-14 items-center justify-between">
                <Link
                    to="/"
                    className={cn(buttonVariants({ variant: "ghost" }), "font-semibold tracking-tight px-2")}
                >
                    Rohan Bharatia
                </Link>

                <nav className="hidden md:flex items-center gap-1">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.end}
                            className={({ isActive }) =>
                                cn(buttonVariants({ variant: isActive ? "secondary" : "ghost", size: "sm" }))
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle />

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon-sm" className="md:hidden">
                                <MenuIcon />
                                <span className="sr-only">Open menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-64">
                            <SheetHeader>
                                <SheetTitle>Navigation</SheetTitle>
                            </SheetHeader>
                            <Separator />
                            <nav className="flex flex-col gap-1 p-4">
                                {links.map((link) => (
                                    <NavLink
                                        key={link.to}
                                        to={link.to}
                                        end={link.end}
                                        className={({ isActive }) =>
                                            cn(buttonVariants({ variant: isActive ? "secondary" : "ghost" }), "w-full justify-start")
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </Container>
        </header>
    );
}
