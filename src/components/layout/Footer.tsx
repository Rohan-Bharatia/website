import { Container } from "./Container";
import { socialLinks } from "@/lib/data";

export function Footer() {
    return (
        <footer className="border-t py-10">
            <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Your Name. All rights reserved.
                </p>

                <div className="flex gap-4 text-sm">
                    {socialLinks.map((s) => (
                        <a
                            key={s.name}
                            href={s.url}
                            target="_BLANK"
                            rel="noreferrer"
                            className="text-muted-foreground hover:text-foreground"
                        >
                            {s.name}
                        </a>
                    ))}
                </div>
            </Container>
        </footer>
    );
}
