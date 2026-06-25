import { Link } from "react-router";
import { ArrowRightIcon, Code2Icon, LinkIcon, MailIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/layout/ButtonLink";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteConfig, socialLinks, projects } from "@/lib/data";

const featured = projects.filter((p) => p.featured);

const iconMap: Record<string, React.ReactNode> = {
    GitHub: <Code2Icon className="size-4" />,
    LinkedIn: <LinkIcon className="size-4" />,
    Email: <MailIcon className="size-4" />,
};

export default function Home() {
    return (
        <main>
            <Section className="py-24 md:py-36">
                <Container className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <p className="text-sm font-medium text-primary uppercase tracking-widest">
                            Welcome
                        </p>
                        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
                            {siteConfig.name}
                        </h1>
                        <p className="text-xl text-muted-foreground font-medium">
                            {siteConfig.title}
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            {siteConfig.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <ButtonLink to="/portfolio">
                            View My Work
                            <ArrowRightIcon className="ml-1 size-4" />
                        </ButtonLink>
                        <ButtonLink to="/contact" variant="outline">
                            Get in Touch
                        </ButtonLink>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                        {socialLinks.filter((s) => iconMap[s.name]).map((s) => (
                            <Button key={s.name} variant="ghost" size="icon-sm" asChild>
                                <a href={s.url} target="_BLANK" rel="noreferrer" aria-label={s.name}>
                                    {iconMap[s.name]}
                                </a>
                            </Button>
                        ))}
                    </div>
                </Container>
            </Section>

            <Separator />

            <Section>
                <Container className="flex flex-col gap-10">
                    <div className="flex items-end justify-between">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
                            <p className="text-muted-foreground text-sm">A few things I've been building.</p>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                            <Link to="/portfolio">
                                All projects <ArrowRightIcon className="ml-1 size-3" />
                            </Link>
                        </Button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {featured.map((project) => (
                            <Card key={project.title} className="flex flex-col justify-between hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex items-start justify-between gap-2">
                                        <CardTitle>{project.title}</CardTitle>
                                        {project.inProgress && (
                                            <Badge variant="secondary" className="shrink-0">In Progress</Badge>
                                        )}
                                    </div>
                                    <CardDescription>{project.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="outline">{tag}</Badge>
                                    ))}
                                </CardContent>
                                <CardFooter className="gap-2">
                                    <Button size="sm" asChild>
                                        <a href={project.href} target="_BLANK" rel="noreferrer">
                                            View Project
                                        </a>
                                    </Button>
                                    <span className="ml-auto text-xs text-muted-foreground">{project.year}</span>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </Container>
            </Section>
        </main>
    );
}
