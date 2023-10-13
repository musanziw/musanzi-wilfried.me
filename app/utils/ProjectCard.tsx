interface ProjectCardProps {
    title: string;
    resume: string;
    link: string;
}

export default function ProjectCard({title, resume, link}: ProjectCardProps) {
    return (
        <div
            className="flex flex-col gap-2">
            <a href={link} className="flex items-center mb-2 gap-5">
                <p className={"font-semibold text-zinc-950 dark:text-white"}>
                    {title}
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-arrow-up-right w-5 h-4 fill-current" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/>
                </svg>
            </a>
            <p className={"text-sm leading-5"}>
                {resume}
            </p>
        </div>
    )
}