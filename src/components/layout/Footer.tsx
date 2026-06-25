import { Container } from "./Container";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/lib/data";

export function Footer() {
    return (
        <footer>
            <Separator />
            <Container className="flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Rohan Bharatia. All rights reserved.
                </p>

                <div className="flex flex-wrap gap-1">
                    {socialLinks.map((s) => (
                        <Button
                            key={s.name}
                            variant="ghost"
                            size="sm"
                            asChild
                        >
                            <a
                                href={s.url}
                                target="_BLANK"
                                rel="noreferrer"
                            >
                                {s.name}
                            </a>
                        </Button>
                    ))}
                </div>
            </Container>
        </footer>
    );
}
