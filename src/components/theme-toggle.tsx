
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [ripple, setRipple] = useState(false);
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });
  
  // Reset the ripple effect after animation completes
  useEffect(() => {
    if (ripple) {
      const timer = setTimeout(() => {
        setRipple(false);
      }, 1000); // Match the animation duration
      return () => clearTimeout(timer);
    }
  }, [ripple]);

  const toggleTheme = (e: React.MouseEvent) => {
    // Get position for ripple effect relative to viewport
    const button = e.currentTarget.getBoundingClientRect();
    const centerX = button.left + button.width / 2;
    const centerY = button.top + button.height / 2;
    
    setRipplePosition({ x: centerX, y: centerY });
    setRipple(true);
    
    // Set theme after a small delay to allow ripple to start
    setTimeout(() => {
      setTheme(theme === "light" ? "dark" : "light");
    }, 50);
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleTheme}
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
      
      {/* Theme switch ripple effect */}
      {ripple && (
        <div 
          className="fixed z-[9999] pointer-events-none"
          style={{
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <div
            className={cn(
              "absolute rounded-full bg-background dark:bg-background",
              "transform scale-0 animate-theme-wave"
            )}
            style={{
              top: ripplePosition.y + "px",
              left: ripplePosition.x + "px",
              width: "max(200vw, 200vh)",
              height: "max(200vw, 200vh)",
              marginLeft: "min(-100vw, -100vh)",
              marginTop: "min(-100vw, -100vh)",
            }}
          />
        </div>
      )}
    </>
  );
}
