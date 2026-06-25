import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/layout/ButtonLink";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <main>
            <Section className="flex items-center justify-center min-h-[60vh]">
                <Container className="flex flex-col items-center gap-6 text-center">
                    <p className="text-8xl font-bold text-muted-foreground/30 select-none">404</p>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold tracking-tight">Page Not Found</h1>
                        <p className="text-muted-foreground max-w-sm">
                            The page you're looking for doesn't exist or was moved.
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <ButtonLink to="/">Go Home</ButtonLink>
                        <Button variant="outline" onClick={() => window.history.back()}>
                            Go Back
                        </Button>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
