import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(10),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export async function sendContactEmail(data: ContactFormData) {
    const res = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Failed to send message");
    }

    return res.json();
}
