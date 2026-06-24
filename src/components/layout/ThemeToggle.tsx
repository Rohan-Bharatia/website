import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.toggle("dark", dark);
    }, [dark]);

    return (
        <button
            onClick={() => setDark((d) => !d)}
            className="rounded-md p-2 hover:bg-muted"
        >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
    );
}
