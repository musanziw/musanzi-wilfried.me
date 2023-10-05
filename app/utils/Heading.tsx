interface HeadingProps {
    title: string,
    subtitle: string
}

export default function Heading({title, subtitle}: HeadingProps) {
    return (
        <h2 className="flex flex-col gap-1 pt-3 font-semibold mb-8 text-zinc-950 dark:text-white">
            {title}
            <span className="text-sm font-medium dark:text-neutral-100">{subtitle}</span>
        </h2>
    )
}