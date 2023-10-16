import Image from "next/image";
import ThemeSwitcher from "@/app/utils/ThemeSwitcher";
import Transition from "@/app/components/Transition";

import me from '@/public/me.webp'
import nextjs from '@/public/nextjs.svg'
import nestjs from '@/public/nestjs.png'


export default function Hero() {
    return (
        <div className="p-8 mb-16 md:pl-0 flex flex-col items-center justify-center w-full md:w-3/4 lg:w-2/5">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                            <div className="container overflow-hidden flex flex-row  mb-32">
                                <div className="rounded-full overflow-hidden w-[3rem] h-[3rem] ">
                                    <Image
                                        src={me}
                                        alt="Musanzi wilfried"
                                        className="grayscale"
                                    />
                                </div>
                                <a href={'https://github.com/musanziw'} target={'_blank'} className="flex flex-col ml-2">
                                    <span className="text-base font-bold text-zinc-950 dark:text-white">
                                        github.com</span>
                                    <span className="text-sm dark:text-gray-300">
                                        @musanziw
                                    </span>
                                </a>
                            </div>
                        </div>
                        <ThemeSwitcher />
                    </div>
                    <div className="">
                        <h1 className={`text-2xl font-extrabold text-zinc-950 dark:text-white mb-1`}>
                            Hey, I&lsquo;m <strong>Wilfried</strong>
                        </h1>
                        <h1 className={`font-semibold text-xl text-stone-600 dark:text-neutral-200`}>
                            I build both <Transition /> apps.
                        </h1>
                    </div>
                </div>
                <p className={'mt-5'}>
                    I am a JavaScript developer with backend and frontend development knowledge, specifically
                    using
                    <span
                        className="ml-1 border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100">
                        <Image src={nextjs} alt={'NextJS'} className={'w-4 h-4 mr-1 dark:fill-white'} />
                        NextJS
                    </span> and
                    <span
                        className="ml-1 border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100">
                        <Image src={nestjs} alt={'NestJS'} className={'w-4 h-4 mr-1 rounded-full'} />
                        NestJS
                    </span>. I am based in Lubumbashi, DRC. I am a self-taught developer with a bachelor&lsquo;s degree
                    in computer science.
                </p>
            </div>
        </div>
    )
}