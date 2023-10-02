import {useState} from "react";
import {DarkModeSwitch} from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSilde";

export default function Switcher() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState<boolean>(colorTheme === "light");

    const toggleDarkMode = (checked: boolean) => {
        setTheme(colorTheme)
        setDarkSide(checked);
    };

    return (
        <DarkModeSwitch
            checked={darkSide}
            onChange={toggleDarkMode}
            size={23}
        />
    );
}