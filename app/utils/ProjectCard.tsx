interface ProjectCardProps {
    title: string;
    resume: string;
    goals: string[];
    tools: string[];
    position: string;
}

export default function ProjectCard({title, resume, goals, tools, position}: ProjectCardProps) {
    return (
        <div
            className="flex flex-col gap-2">
            <h4 className={"font-semibold font-outfit text-zinc-950 dark:text-white"}>
                {title}
            </h4>
            <p className={"text-sm leading-5 mb-2"}>
                {resume}
            </p>
            {

                <>
                    <h5 className={"font-semibold font-outfit text-zinc-950 dark:text-white"}>
                        Position held : <span className={'font-medium font-inter text-sm'}>{position}</span>
                    </h5>
                    <h5 className={"font-semibold font-outfit text-zinc-950 dark:text-white mt-3"}>
                        Goals
                    </h5>
                    <ul className="flex flex-col gap-1">
                        {goals.map((goal, index) => (
                            <li
                                key={index}
                                className="text-sm leading-5">
                                        <span className="flex flex-row items-start gap-1">
                                            &mdash;
                                            <span className="">
                                                {goal}
                                            </span>
                                        </span>
                            </li>
                        ))}
                    </ul>
                    <h5 className={"font-semibold font-outfit text-zinc-950 dark:text-white mt-3"}>
                        Tools
                    </h5>
                    <div className="flex flex-wrap gap-2">
                        {tools.map((tool, index) => (
                            <span
                                key={index}
                                className="px-2 py-1 rounded-full bg-neutral-400/10 dark:text-white dark:bg-zinc-500/10 text-xs leading-5 font-medium font-outfit">
                                    {tool}
                                    </span>
                        ))}
                    </div>
                </>
            }
        </div>
    )
}