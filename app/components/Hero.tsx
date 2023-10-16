import me from '@/app/images/me.webp'
import Image from "next/image";
import ThemeSwitcher from "@/app/utils/ThemeSwitcher";
import nextjs from '@/app/images/nextjs.svg'
import nestjs from '@/app/images/nestjs.png'
import Transition from "@/app/components/Transition";

export default function Hero() {
    return (
        <div className="p-8 mb-16 md:pl-0 flex flex-col items-center justify-center w-full md:w-3/4 lg:w-2/5">
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="container overflow-hidden flex flex-row">
                                <div className="rounded-full overflow-hidden w-[4rem] h-[4rem] ">
                                    <Image
                                        src={me}
                                        alt="Musanzi wilfried"
                                        className="grayscale"
                                    />
                                </div>
                                <div className="flex flex-col ml-2 mt-2">
                                    <h1 className="text-base font-bold text-zinc-950 dark:text-white">@musanziw</h1>
                                    <span className="text-sm text-neutral-700 dark:text-gray-300">JavaScript developer</span>
                                </div>
                            </div>
                        </div>
                        <ThemeSwitcher/>
                    </div>
                    <div className="">
                        <h1 className={`text-2xl font-extrabold text-zinc-950 dark:text-white mb-1`}>
                            Hey, I&lsquo;m <strong>Wilfried</strong>
                        </h1>
                        <h1 className={`font-semibold text-xl text-stone-600 dark:text-neutral-200`}>
                            I build both <Transition />
                        </h1>
                    </div>
                </div>
                <p className={'mt-5'}>
                    I am a JavaScript developer with backend and frontend development knowledge, specifically
                    using
                    <span
                        className="ml-1 border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100">
                       <Image src={nextjs} alt={'NextJS'} className={'w-4 h-4 mr-1'}/>
                        NextJS
                    </span> and
                    <span
                        className="ml-1 border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100">
                       <Image src={nestjs} alt={'NestJS'} className={'w-4 h-4 mr-1 rounded-full'}/>
                        NestJS
                    </span>. I am based in Lubumbashi, DRC. I am a self-taught developer with a bachelor&lsquo;s degree
                    in computer science.
                </p>
            </div>
        </div>
    )
}