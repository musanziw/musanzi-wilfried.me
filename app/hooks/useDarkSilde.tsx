import { useState, useEffect } from "react";

type Theme = "dark" | "light";

export default function useDarkSide(): [Theme, (theme: Theme) => void] {
    const [theme, setTheme] = useState<Theme>(
        typeof window !== "undefined" ? localStorage.theme as Theme || "dark" : "dark"
    );

    const colorTheme: Theme = theme === "dark" ? "light" : "dark";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}