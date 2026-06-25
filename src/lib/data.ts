export type SocialLink = {
    name: string;
    url: string;
};

export type Project = {
    title: string;
    description: string;
    href: string;
    repo?: string;
    tags: string[];
    featured: boolean;
    year: number;
    inProgress: boolean;
};

export type SkillGroup = {
    category: string;
    languages?: string[];
    items: string[];
};

export const siteConfig = {
    name: "Rohan Bharatia",
    title: "Student & Aspiring Engineer",
    description: "I build systems from the ground up: engines, embedded controllers, AI assistants, and full-stack web apps. Currently a student, always engineering.",
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
    {
        name: "Number",
        url: "tel:8563666143",
    },
];

export const projects: Project[] = [
    {
        title: "Arch Linux Dotfiles (Configurations)",
        description: "My custom Arch Linux configurations setup",
        href: "https://github.com/Rohan-Bharatia/Arch-Dots.git",
        repo: "Rohan-Bharatia/Arch-Dots",
        tags: ["Linux", "MangoWM"],
        featured: true,
        year: 2025,
        inProgress: true,
    },
    {
        title: "Nautilus Engine",
        description: "A modular graphics and game engine",
        href: "https://github.com/Rohan-Bharatia/Nautilus-Engine.git",
        repo: "Rohan-Bharatia/Nautilus-Engine",
        tags: ["Graphics", "Cross-Platform"],
        featured: true,
        year: 2024,
        inProgress: true,
    },
    {
        title: "JARVIS",
        description: "A powerful voice-activated AI assistant (based on the Iron Man movies)",
        href: "https://github.com/Rohan-Bharatia/JARVIS.git",
        repo: "Rohan-Bharatia/JARVIS",
        tags: ["AI", "RPC"],
        featured: true,
        year: 2026,
        inProgress: true
    },
    {
        title: "Password Manager",
        description: "A simple secure TUI password manager",
        href: "https://github.com/Rohan-Bharatia/password-manager.git",
        repo: "Rohan-Bharatia/password-manager",
        tags: ["Database", "Encryption"],
        featured: false,
        year: 2026,
        inProgress: false,
    },
    {
        title: "Personal Website",
        description: "My personal website, portfolio, resume, and contact portal",
        href: "https://github.com/Rohan-Bharatia/website.git",
        repo: "Rohan-Bharatia/website",
        tags: ["Web Development", "Full-Stack"],
        featured: false,
        year: 2026,
        inProgress: true,
    },
    {
        title: "Peer-To-Peer Chat",
        description: "A cross-platform (desktop) TUI-based p2p network chat app",
        href: "https://github.com/Rohan-Bharatia/PtP-Chat.git",
        repo: "Rohan-Bharatia/PtP-Chat",
        tags: ["Networking", "Cross-Platform"],
        featured: true,
        year: 2025,
        inProgress: false,
    },
    {
        title: "Virtual Computer",
        description: "A simulated 4-bit CPU designed with only raw logic gates",
        href: "https://github.com/Rohan-Bharatia/Virtual-Computer.git",
        repo: "Rohan-Bharatia/Virtual-Computer",
        tags: ["Simulation", "Computer Architecture"],
        featured: false,
        year: 2024,
        inProgress: false,
    },
    {
        title: "Bare-Metal Calculator",
        description: "A raw assembly (Windows x64 ASM) CL calculator app",
        href: "https://github.com/Rohan-Bharatia/Assembly-CL-Calculator.git",
        repo: "Rohan-Bharatia/Assembly-CL-Calculator",
        tags: ["Bare-Metal", "Calculator"],
        featured: false,
        year: 2024,
        inProgress: false,
    },
];

export const skills: SkillGroup[] = [
    {
        category: "Low-Level / Systems",
        languages: ["C", "C++", "Rust", "Assembly", "Java"],
        items: ["Linux", "FreeRTOS", "Zephyr RTOS", "Memory Managment", "Multithreading", "Systems Programming"],
    },
    {
        category: "Cybersecurity",
        languages: ["C", "C++", "Python", "Assembly"],
        items: ["Encryption", "Memory Safety", "SQL Injections", "RCEs", "Virtual Machines", "Linux"],
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
        items: ["Git", "CMake", "Gradle", "Docker", "Renode", "Vercel", "NPM", "Vite", "CI/CD"],
    },
    {
        category: "Core CS Concepts / Theory",
        items: ["Data Structures", "Algorithms", "Operating Systems", "Computer Architecture", "Concurrency", "Optimization"],
    }
];
