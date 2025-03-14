
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(
        "rounded-full w-9 h-9 p-0 transition-all duration-300", 
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun
        className={cn(
          "h-5 w-5 transition-all",
          theme === "dark" ? "opacity-0 scale-0" : "opacity-100 scale-100 rotate-0"
        )}
      />
      <Moon
        className={cn(
          "absolute h-5 w-5 transition-all",
          theme === "dark" ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0"
        )}
      />
    </Button>
  );
}
