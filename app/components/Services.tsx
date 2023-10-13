import db from '@/app/images/db.png'
import Heading from "../utils/Heading";
import Image from "next/image";
import nextjs from '@/app/images/nextjs.svg'
import nest from '@/app/images/nestjs.png'

export default function Services() {
    return (
        <div className={'p-8 md:p-0 mb-16 w-full md:w-3/4 lg:w-2/5'}>
            <Heading title={"Services"}/>
            <div className="grid grid-cols-1 gap-7 items-center">
                <div
                    className="z-0 relative flex flex-col gap-3 rounded-md border border-neutral-300 hover:border-neutral-400 dark:border-neutral-600 dark:hover:border-neutral-500 py-4 px-6 transition-colors duration-300">
                    <div className="z-10 absolute -top-4 -left-2">
                        <Image src={nextjs} alt={'nextjs'} className={'w-8 h-8'}/>
                    </div>
                    <h5 className={'font-semibold'}>Frontend development</h5>
                    <p className="text-sm">
                        I utilize the powerful combination of Next.js and Tailwind CSS to transform your design concepts
                        or ideas into vibrant, functional web applications.
                        Additionally, as an added benefit, I am capable of independently crafting designs when needed.
                    </p>
                </div>

                <div
                    className="z-0 relative flex flex-col gap-3 rounded-md border border-neutral-300 hover:border-neutral-400 dark:border-neutral-600 dark:hover:border-neutral-500 py-4 px-6 transition-colors duration-300">
                    <div className="z-10 absolute -top-4 -left-2 rounded-full overflow-hidden">
                        <Image src={nest} alt={'nextjs'} className={'w-8 h-8'}/>
                    </div>
                    <h5 className={'font-semibold'}>Backend development</h5>
                    <p className="text-sm">
                        As a backend developer, I leverage the power of Nest.js to craft secure and scalable APIs. With
                        my expertise in this framework, I specialize in developing high-quality RESTful APIs that
                        prioritize security and scalability.
                    </p>
                </div>

                <div
                    className="z-0 relative flex flex-col gap-3 rounded-md border border-neutral-300 hover:border-neutral-400 dark:border-neutral-500 dark:hover:border-neutral-600 py-4 px-6 transition-colors duration-300">
                    <div className="z-10 absolute -top-4 -left-2 -rotate-45 rounded-full overflow-hidden">
                        <Image src={db} alt={'nextjs'} className={'w-8 h-8'}/>
                    </div>
                    <h5 className={'font-semibold'}>Sotware modeling</h5>
                    <p className="text-sm">
                        I employ the Unified Modeling Language (UML) to create comprehensive and well-structured
                        representations of software systems. UML serves as a standardized visual language that enables
                        effective communication and documentation of software designs.
                    </p>
                </div>

            </div>
        </div>
    )
}