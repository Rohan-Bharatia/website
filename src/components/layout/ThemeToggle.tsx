import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.toggle("dark", dark);
    }, [dark]);

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setDark((d) => !d)}
                    aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {dark ? <Sun /> : <Moon />}
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                {dark ? "Light mode" : "Dark mode"}
            </TooltipContent>
        </Tooltip>
    );
}
