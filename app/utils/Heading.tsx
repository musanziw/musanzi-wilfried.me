interface HeadingProps {
    title: string,
}

export default function Heading({title}: HeadingProps) {
    return (
        <h2 className="flex flex-col t-3 text-lg font-bold mb-8 text-zinc-950 dark:text-white">
            {title}
        </h2>
    )
}