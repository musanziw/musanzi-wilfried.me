import Heading from "../utils/Heading";
import {RevealList, RevealWrapper} from "next-reveal";

export default function Contact() {
    return (
        <div className={'p-8 mb-5 md:p-0 w-full md:w-2/3 lg:w-1/3'}>
            <RevealWrapper origin={'bottom'}>
                <Heading label={"Then, what's next ?"} sublabel={"Social links"}/>
            </RevealWrapper>
            <RevealList interval={100} delay={100} origin={'right'}>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <li className={"text-sm"}>
                        <a href={'https://t.me/musanziw'}
                           className={'flex items-center gap-4 bg-neutral-500/10 rounded-xl px-3 py-3 hover:bg-zinc-700/10 transition-colors duration-300 dark:bg-zinc-500/10 dark:hover:bg-zinc-200/10'}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="bi bi-telegram w-6 h-6 fill-zinc-950 dark:fill-white"
                                 viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                            </svg>

                            <div className="flex flex-col gap-1">
                                <h5 className={"text-zinc-950 dark:text-white"}>
                                    Telegram
                                </h5>
                                <p className="text-xs">
                                    musanziw
                                </p>

                            </div>
                        </a>
                    </li>

                    <li className={"text-sm"}>
                        <a href={'https://medium.com/@musanziwilfried'}
                           target={'_blank'}
                           className={'flex items-center gap-4 bg-neutral-500/10 rounded-xl px-3 py-3 hover:bg-zinc-700/10 transition-colors duration-300 dark:bg-zinc-500/10 dark:hover:bg-zinc-200/10'}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="bi bi-medium w-6 h-6 fill-zinc-950 dark:fill-white" viewBox="0 0 16 16">
                                <path
                                    d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"/>
                            </svg>
                            <div className="flex flex-col gap-1">
                                <h5 className={"text-zinc-950 dark:text-white"}>
                                    Medium
                                </h5>
                                <p className="text-xs">
                                    musanziwilfried
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className={"text-sm"}>
                        <a href={'https://linkedin.com/in/wilfried-musanzi-197381205'}
                           className={'flex items-center gap-4 bg-neutral-500/10 rounded-xl px-3 py-3 hover:bg-zinc-700/10 transition-colors duration-300 dark:bg-zinc-500/10 dark:hover:bg-zinc-200/10'}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="bi bi-linkedin w-5 h-6 fill-zinc-950 dark:fill-white"
                                 viewBox="0 0 16 16">
                                <path
                                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                            <div className="flex flex-col gap-1">
                                <h5 className={"text-zinc-950 dark:text-white"}>
                                    Linkedin
                                </h5>
                                <p className="text-xs">
                                    wilfried-musanzi
                                </p>
                            </div>
                        </a>
                    </li>

                    <li className={"text-sm"}>
                        <a href={'tel:+243979265726'}
                           className={'flex items-center gap-4 bg-neutral-500/10 rounded-xl px-3 py-3 hover:bg-zinc-700/10 transition-colors duration-300 dark:bg-zinc-500/10 dark:hover:bg-zinc-200/10'}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className="bi bi-telephone w-4 h-5 fill-zinc-950 dark:fill-white"
                                 viewBox="0 0 16 16">
                                <path
                                    d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            <div className="flex flex-col gap-1">
                                <h5 className={"text-zinc-950 dark:text-white"}>
                                    Telephone
                                </h5>
                                <p className="text-xs">
                                    +243 97 926 5726
                                </p>
                            </div>
                        </a>
                    </li>
                </ul>
            </RevealList>

        </div>
    )
}