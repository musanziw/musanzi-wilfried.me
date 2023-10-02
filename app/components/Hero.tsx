import React from "react";
import me from '@/app/images/me.webp'
import Switcher from "../utils/Switcher";
import Heading from "../utils/Heading";
import {Fade} from "react-awesome-reveal";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="px-8 mb-16 pt-6 md:pl-0 flex flex-col items-center justify-center w-full md:w-2/3 lg:w-1/3">
            <div
                className={`flex items-center justify-between mb-20 w-full`}>
                {/*<Fade direction={"down"} triggerOnce={true} cascade={true} damping={0.1}>*/}
                    <h1 className={'uppercase font-bold text-2xl dark:text-white text-zinc-950'}>m.</h1>
                    <div className="flex items-center gap-4">
                        <a href="https://github.com/musanziw" target={'_blank'}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="bi bi-github w-5 h-7 fill-zinc-950 dark:fill-white" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>
                        <Switcher/>
                    </div>
                {/*</Fade>*/}
            </div>

            <div className="flex flex-col">
                {/*<Fade triggerOnce={true} cascade={true} damping={0.2}>*/}
                    <div className="flex items-center justify-between mb-5">
                        <Heading label={"About Me"} sublabel={"Profile"}/>
                        <div className="w-[6rem] h-[6rem] rounded-full overflow-hidden">
                            <Image src={me} className={"rounded-sm grayscale"} alt="Musazi's picture"/>
                        </div>
                    </div>
                    <strong className={"text-2xl font-semibold text-zinc-950 mt-10 dark:text-white"}>
                        Hey, I&apos;m Wilfried Musanzi Fullsatck JavaScript developer based in Lubumbashi, DRC.
                    </strong>
                    <p className={'mt-8'}>
                        I have been working in the tech industry for the past three years. I am an enthusiast of
                        JavaScript
                        technologies and I am proficient in a variety of engineering tools.
                    </p>
                {/*</Fade>*/}
            </div>
        </div>
    )
}