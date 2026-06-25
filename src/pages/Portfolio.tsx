import { useState } from "react";
import { ExternalLinkIcon, Code2Icon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/layout/FadeIn";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

export default function Portfolio() {
    const [activeTag, setActiveTag] = useState<string | null>(null);

    const filtered = activeTag
        ? projects.filter((p) => p.tags.includes(activeTag))
        : projects;

    return (
        <main>
            <Section>
                <Container className="flex flex-col gap-10">
                    <FadeIn y={24}>
                        <div className="flex flex-col gap-2">
                            <p className="text-sm font-medium text-primary uppercase tracking-widest">Portfolio</p>
                            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Projects</h1>
                            <p className="text-muted-foreground max-w-xl">
                                A collection of things I've built; from game engines and AI assistants to
                                security tools and bare-metal programs.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.08}>
                        <div className="flex flex-wrap gap-2">
                            <Button
                                size="sm"
                                variant={activeTag === null ? "default" : "outline"}
                                onClick={() => setActiveTag(null)}
                            >
                                All
                            </Button>
                            {allTags.map((tag) => (
                                <Button
                                    key={tag}
                                    size="sm"
                                    variant={activeTag === tag ? "default" : "outline"}
                                    onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                                >
                                    {tag}
                                </Button>
                            ))}
                        </div>
                    </FadeIn>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((project, i) => (
                            <FadeIn key={project.title} delay={i * 0.06}>
                                <Card className="flex flex-col justify-between hover:shadow-lg transition-shadow h-full">
                                    <CardHeader>
                                        <div className="flex items-start justify-between gap-2">
                                            <CardTitle>{project.title}</CardTitle>
                                            <div className="flex shrink-0 gap-1">
                                                {project.featured && (
                                                    <Badge variant="default">Featured</Badge>
                                                )}
                                                {project.inProgress && (
                                                    <Badge variant="secondary">Active</Badge>
                                                )}
                                            </div>
                                        </div>
                                        <CardDescription>{project.description}</CardDescription>
                                    </CardHeader>

                                    <CardContent className="flex flex-wrap gap-1.5">
                                        {project.tags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant={activeTag === tag ? "default" : "outline"}
                                                className="cursor-pointer"
                                                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </CardContent>

                                    <CardFooter className="gap-2">
                                        <Button size="sm" asChild>
                                            <a href={project.href} target="_BLANK" rel="noreferrer">
                                                <ExternalLinkIcon className="size-3.5" />
                                                View
                                            </a>
                                        </Button>
                                        {project.repo && (
                                            <Button size="sm" variant="outline" asChild>
                                                <a
                                                    href={`https://github.com/${project.repo}`}
                                                    target="_BLANK"
                                                    rel="noreferrer"
                                                >
                                                    <Code2Icon className="size-3.5" />
                                                    Source
                                                </a>
                                            </Button>
                                        )}
                                        <span className="ml-auto text-xs text-muted-foreground">{project.year}</span>
                                    </CardFooter>
                                </Card>
                            </FadeIn>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="flex flex-col items-center gap-3 py-20 text-center">
                            <p className="text-muted-foreground">No projects match that filter.</p>
                            <Button variant="outline" size="sm" onClick={() => setActiveTag(null)}>
                                Clear filter
                            </Button>
                        </div>
                    )}
                </Container>
            </Section>
        </main>
    );
}
