interface HeadingProps {
    title: string,
}

export default function Heading({title}: HeadingProps) {
    return (
        <h2 className="flex flex-col gap-1 pt-3 text-xl font-semibold mb-8 text-zinc-950 dark:text-white">
            {title}
        </h2>
    )
}