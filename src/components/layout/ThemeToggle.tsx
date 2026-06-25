import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const isDark = resolvedTheme == "dark";

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => setTheme(isDark ? "light" : "dark")}
                    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {isDark ? <Sun /> : <Moon />}
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                {isDark ? "Light mode" : "Dark mode"}
            </TooltipContent>
        </Tooltip>
    );
}
