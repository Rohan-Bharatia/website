import { Link, NavLink } from "react-router-dom";
import { Container } from "./Container";

const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" },
];

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <Container className="flex h-14 items-center justify-between">
                <Link to="/" className="font-semibold tracking-tight">
                    Rohan Bharatia
                </Link>
                <nav className="flex gap-6 text-sm">
                    {links.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                isActive ? "text-primary font-medium" : "text-muted-foreground"
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
            </Container>
        </header>
    );
}
