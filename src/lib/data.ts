export type SocialLink = {
    name: string;
    url: string;
    icon?: string;
};

export type Project = {
    title: string;
    description: string;
    href: string;
    repo?: string;
    tags: string[];
    featured?: boolean;
    year?: number;
};

export type SkillGroup = {
    category: string;
    languages?: string[];
    items: string[];
};

export const siteConfig = {
    name: "Rohan Bharatia",
    title: "Student & Aspiring Engineer",
    description: "...",
    url: "https://rohan-bharatia.vercel.app",
};

export const socialLinks: SocialLink[] = [
    {
        name: "GitHub",
        url: "https://github.com/Rohan-Bharatia",
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/rohan-bharatia-273374399",
    },
    {
        name: "Email",
        url: "mailto:rohan.bharatia@outlook.com",
    },
];

export const projects: Project[] = [
    // ...
];

export const skills: SkillGroup[] = [
    {
        category: "Low-Level / Systems",
        languages: ["C", "C++", "Rust", "Assembly (x86_64 NASM)", "Java"],
        items: ["Linux", "FreeRTOS", "Zephyr RTOS", "Memory Managment", "Multithreading", "Systems Programming"],
    },
    {
        category: "Networking",
        languages: ["C", "C++", "Python"],
        items: ["TCP/ICP", "Sockets", "HTTP/HTTPS", "REST APIs", "WebSockets", "Latency Optimization"],
    },
    {
        category: "Robotics / Embedded",
        languages: ["C", "C++", "Python", "Java"],
        items: ["WPILib", "FRC Driver Station", "PID Control", "Sensor Integration", "Embedded Control Systems"],
    },
    {
        category: "Artificial Intelligence / Machine Learning",
        languages: ["C++", "Python", "CUDA"],
        items: ["Neural Networks", "GPU Acceleration", "NumPy", "OpenAI Whisper", "PyTorch"],
    },
    {
        category: "Data Science",
        languages: ["Python"],
        items: ["NumPy", "Matplotlib", "Jupyter Notebook"],
    },
    {
        category: "Graphics / Game Dev",
        languages: ["C", "C++", "GLSL", "Java", "Python", "QML", "GDScript"],
        items: ["OpenGL", "Vulkan", "GLFW", "SDL3", "GLAD", "Shader Programming", "AWT/Swing", "GTK", "Qt", "Godot Engine"],
    },
    {
        category: "Frontend",
        languages: ["JavaScript", "TypeScript", "CSS", "HTML"],
        items: ["React", "Tailwind CSS", "Next.js", "Vite", "Component Design"],
    },
    {
        category: "Backend",
        languages: ["JavaScript", "Python", "SQL"],
        items: ["Node.js", "Express", "REST APIs", "SQLite", "MongoDB", "Auth Systems"],
    },
    {
        category: "Tools / DevOps",
        items: ["Git", "CMake", "Gradle", "Docker", "Vercel", "NPM", "Vite", "CI/CD"],
    },
    {
        category: "Core CS Concepts / Theory",
        items: ["Data Structures", "Algorithms", "Operating Systems", "Computer Architecture", "Concurrency", "Optimization"],
    }
];
