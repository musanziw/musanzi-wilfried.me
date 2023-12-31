import {useState, useEffect} from "react";

type Theme = "dark" | "light";

export default function useDarkSide(): [Theme, (theme: Theme) => void] {
    const [theme, setTheme] = useState<Theme>(
        typeof window !== "undefined" ? localStorage.theme as Theme || "light" : "dark"
    );

    const colorTheme: Theme = theme === "light" ? "dark" : "light";

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}