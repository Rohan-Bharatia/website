import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ButtonLink } from "@/components/layout/ButtonLink";
import { FadeIn } from "@/components/layout/FadeIn";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { siteConfig, skills } from "@/lib/data";

export default function About() {
    return (
        <main>
            <Section>
                <Container className="flex flex-col gap-10">
                    <FadeIn y={24}>
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <p className="text-sm font-medium text-primary uppercase tracking-widest">About Me</p>
                            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                                {siteConfig.name}
                            </h1>
                            <p className="text-xl text-muted-foreground font-medium">{siteConfig.title}</p>
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    I'm a student and self-taught engineer with a passion for building things
                                    from the ground up. My work spans low-level systems programming, robotics,
                                    AI, graphics engines, and full-stack web development.
                                </p>
                                <p>
                                    Whether it's wiring logic gates into a virtual CPU, writing GLSL shaders for
                                    a custom graphics engine, or building a voice-activated AI assistant, I'm
                                    drawn to projects that push me into unfamiliar territory and require deep
                                    understanding of the underlying systems.
                                </p>
                                <p>
                                    Outside of code, I work on competitive robotics and am always tinkering with
                                    some new idea in the areas of networking, simulation, or hardware.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3 pt-2">
                                <ButtonLink to="/portfolio">My Projects</ButtonLink>
                                <ButtonLink to="/contact" variant="outline">Contact Me</ButtonLink>
                            </div>
                        </div>
                    </FadeIn>

                    <Separator />

                    <div className="flex flex-col gap-6">
                        <FadeIn>
                            <div className="flex flex-col gap-1">
                                <h2 className="text-2xl font-bold tracking-tight">Skills & Expertise</h2>
                                <p className="text-muted-foreground text-sm">
                                    Technologies, tools, and disciplines I work with.
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {skills.map((group, i) => (
                                <FadeIn key={group.category} delay={i * 0.06}>
                                    <Card size="sm" className="h-full">
                                        <CardHeader>
                                            <CardTitle className="text-sm">{group.category}</CardTitle>
                                            {group.languages && (
                                                <div className="flex flex-wrap gap-1 mt-1">
                                                    {group.languages.map((lang) => (
                                                        <Badge key={lang} variant="default" className="text-xs">
                                                            {lang}
                                                        </Badge>
                                                    ))}
                                                </div>
                                            )}
                                        </CardHeader>
                                        <CardContent className="flex flex-wrap gap-1.5">
                                            {group.items.map((item) => (
                                                <Badge key={item} variant="outline" className="text-xs">
                                                    {item}
                                                </Badge>
                                            ))}
                                        </CardContent>
                                    </Card>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
