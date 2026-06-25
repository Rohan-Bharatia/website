import { Code2Icon, LinkIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/layout/EmailForm";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const iconMap: Record<string, React.ReactNode> = {
    GitHub: <Code2Icon className="size-4" />,
    LinkedIn: <LinkIcon className="size-4" />,
    Email: <MailIcon className="size-4" />,
    Number: <PhoneIcon className="size-4" />,
};

export default function Contact() {
    return (
        <main>
            <Section>
                <Container className="flex flex-col gap-10">
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium text-primary uppercase tracking-widest">Contact</p>
                        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Get in Touch</h1>
                        <p className="text-muted-foreground max-w-xl">
                            Whether you have a project idea, a question, or just want to say hello —
                            I'd love to hear from you.
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold">Send a Message</h2>
                                <p className="text-sm text-muted-foreground">
                                    Fill out the form and I'll get back to you as soon as possible.
                                </p>
                            </div>
                            <ContactForm />
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-2">
                                <h2 className="text-xl font-semibold">Connect</h2>
                                <p className="text-sm text-muted-foreground">
                                    Find me on the web or reach out directly.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3">
                                {socialLinks.map((s) => (
                                    <Card key={s.name} size="sm">
                                        <CardHeader>
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-9 items-center justify-center rounded-full bg-muted">
                                                    {iconMap[s.name] ?? <MailIcon className="size-4" />}
                                                </div>
                                                <div>
                                                    <CardTitle className="text-sm">{s.name}</CardTitle>
                                                    <CardDescription className="text-xs truncate max-w-56">
                                                        {s.url.replace("mailto:", "").replace("tel:", "")}
                                                    </CardDescription>
                                                </div>
                                                <Button size="sm" variant="ghost" className="ml-auto" asChild>
                                                    <a href={s.url} target="_BLANK" rel="noreferrer">
                                                        Open
                                                    </a>
                                                </Button>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>

                            <Separator />

                            <Card size="sm" className="bg-muted/40">
                                <CardHeader>
                                    <CardTitle className="text-sm">Based in the US</CardTitle>
                                    <CardDescription className="text-xs">
                                        Available for remote collaboration, open-source work, and
                                        interesting engineering challenges.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
