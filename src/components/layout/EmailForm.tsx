import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { contactSchema, sendContactEmail } from "@/lib/email";
import type { ContactFormData } from "@/lib/email";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            await sendContactEmail(data);
            reset();
            toast.success("Message sent!", {
                description: "Thanks for reaching out. I'll get back to you soon.",
            });
        } catch (err: unknown) {
            toast.error("Failed to send message", {
                description: err instanceof Error ? err.message : "Something went wrong.",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                />
                {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                />
                {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
            </div>

            <div className="space-y-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    placeholder="What's on your mind?"
                    rows={5}
                    aria-invalid={!!errors.message}
                    {...register("message")}
                />
                {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}
