interface ProjectCardProps {
    title: string;
    resume: string;
    tools: string[];
}

export default function ProjectCard({title, resume, tools}: ProjectCardProps) {
    return (
        <div
            className="flex flex-col gap-2">
            <p className={"font-semibold text-zinc-950 dark:text-white"}>
                {title}
            </p>
            <p className={"text-sm leading-5 mb-2"}>
                {resume}
            </p>
            {
                <>
                    <p className={"font-semibold text-zinc-950 dark:text-white mt-3"}>
                        Tools
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {tools.map((tool, index) => (
                            <span key={index}
                                  className="px-2 py-1 rounded-full bg-neutral-400/10 dark:text-white dark:bg-zinc-400/10 text-xs leading-5 font-medium">
                                    {tool}
                            </span>
                        ))}
                    </div>
                </>
            }
        </div>
    )
}