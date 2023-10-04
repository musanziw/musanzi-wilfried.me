'use client';
import {useEffect, useState} from "react";
import {DarkModeSwitch} from "react-toggle-dark-mode";
import useDarkSide from "@/app/hooks/useDarkSilde";

export default function ThemeSwitcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light"
    );

    useEffect(() => {
        setDarkSide(colorTheme === "dark");
    }, [colorTheme]);

    const toggleDarkMode = (checked: boolean) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    return (
        <>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={22}
                style={{outline: "none"}}
                moonColor={"#000"}
                sunColor={"#fff"}
            />
        </>
    );
}
