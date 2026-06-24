import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, sendContactEmail } from "@/lib/email";
import type { ContactFormData } from "@/lib/email";

export function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            await sendContactEmail(data);
            reset();
            alert("Message sent!");
        } catch (err: any) {
            alert(err.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <input {...register("name")} placeholder="Name" />
            {errors.name && <p>{errors.name.message}</p>}

            <input {...register("email")} placeholder="Email" />
            {errors.email && <p>{errors.email.message}</p>}

            <textarea {...register("message")} placeholder="Message" />
            {errors.message && <p>{errors.message.message}</p>}

            <button disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send"}
            </button>
        </form>
    );
}
