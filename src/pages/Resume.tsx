import { DownloadIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/layout/FadeIn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig, skills } from "@/lib/data";

export default function Resume() {
    return (
        <main>
            <Section>
                <Container className="flex flex-col gap-10 max-w-3xl">
                    <FadeIn y={24}>
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm font-medium text-primary uppercase tracking-widest">Resume</p>
                                <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{siteConfig.name}</h1>
                                <p className="text-lg text-muted-foreground">{siteConfig.title}</p>
                            </div>
                            <Button variant="outline" asChild>
                                <a href={siteConfig.url} target="_BLANK" rel="noreferrer">
                                    <DownloadIcon className="size-4" />
                                    Full Resume
                                </a>
                            </Button>
                        </div>
                    </FadeIn>

                    <Separator />

                    <FadeIn delay={0.05}>
                        <div className="flex flex-col gap-4">
                            <h2 className="text-xl font-bold tracking-tight">Summary</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Student engineer with broad experience across systems programming, embedded
                                systems, robotics, AI/ML, graphics, networking, and full-stack web development.
                                Comfortable working at any layer of the stack; from raw assembly and logic gates
                                to React frontends and REST APIs. Competitive robotics participant (FRC) and
                                active open-source contributor.
                            </p>
                        </div>
                    </FadeIn>

                    <Separator />

                    <div className="flex flex-col gap-6">
                        <FadeIn>
                            <h2 className="text-xl font-bold tracking-tight">Technical Skills</h2>
                        </FadeIn>

                        <div className="flex flex-col gap-4">
                            {skills.map((group, i) => (
                                <FadeIn key={group.category} delay={i * 0.05}>
                                    <div>
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                                            <div className="min-w-48 shrink-0">
                                                <p className="text-sm font-semibold">{group.category}</p>
                                                {group.languages && (
                                                    <p className="text-xs text-muted-foreground mt-0.5">
                                                        {group.languages.join(", ")}
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex flex-wrap gap-1.5">
                                                {group.items.map((item) => (
                                                    <Badge key={item} variant="outline" className="text-xs">
                                                        {item}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <Separator className="mt-4" />
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>

                    <FadeIn>
                        <div className="flex flex-col gap-6">
                            <h2 className="text-xl font-bold tracking-tight">Education</h2>
                            <Card size="sm">
                                <CardHeader>
                                    <CardTitle>High School Student</CardTitle>
                                </CardHeader>
                                <CardContent className="flex flex-col gap-3">
                                    <p className="text-muted-foreground text-sm">
                                        Self-directed engineering education through personal projects,
                                        open-source contributions, and competitive robotics (FRC).
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        <Badge variant="secondary">FRC Robotics</Badge>
                                        <Badge variant="secondary">Open Source</Badge>
                                        <Badge variant="secondary">Self-Taught</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </FadeIn>
                </Container>
            </Section>
        </main>
    );
}
