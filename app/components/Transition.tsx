"use client";

import {useEffect, useState} from "react";
import {config} from "@react-spring/web";
import TextTransition from "@/app/utils/Text";

const TEXTS = ["backend", "and", "frontend"];

export default function Transition() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000 // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <span className="ml-2 text-white">
              <TextTransition inline springConfig={config.gentle}>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
        </span>
    );
}