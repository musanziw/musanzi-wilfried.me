import me from '@/app/images/me.webp'
import Image from "next/image";
import ThemeSwitcher from "@/app/utils/ThemeSwitcher";
import nextjs from '@/app/images/nextjs.svg'
import nestjs from '@/app/images/nestjs.png'

export default function Hero() {
    return (
        <div className="p-8 mb-16 md:pl-0 flex flex-col items-center justify-center w-full md:w-3/4 lg:w-2/5">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div className="flex justify-between items-start">
                        <div className="w-[7rem] h-[7rem] rounded-full mt-1 overflow-hidden mb-5">
                            <Image src={me} className={"rounded-sm grayscale"} alt="Musazi's picture"/>
                        </div>
                        <ThemeSwitcher/>
                    </div>
                    <div className="">
                        <h1 className={`text-2xl font-extrabold text-zinc-950 dark:text-white mb-1`}>
                            Hey, I&lsquo;m <strong>Wilfried</strong>
                        </h1>
                        <h1 className={`font-semibold text-xl text-stone-600 dark:text-neutral-200`}>
                            JavaScript developer
                        </h1>
                    </div>
                </div>
                <p className={'mt-5'}>
                    I am a JavaScript developer with backend and frontend development knowledge with
                    <span
                        className="ml-1 border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100">
                       <Image src={nextjs} alt={'NextJS'} className={'w-4 h-4 mr-1'}/>
                        NextJS
                    </span> and
                    <span
                        className="ml-1 border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100">
                       <Image src={nestjs} alt={'NestJS'} className={'w-4 h-4 mr-1'}/>
                        NestJS
                    </span>. I am
                    based in Lubumbashi, DRC. I am a self-taught developer with bachelor degree in computer science.
                </p>
            </div>
        </div>
    )
}