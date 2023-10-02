interface HeadingProps {
    label: string,
    sublabel: string
}

export default function Heading({label, sublabel}: HeadingProps) {
    return (
        <h2 className="flex flex-col gap-1 text-xl pt-3 font-bold mb-8 text-zinc-950 dark:text-white">
            {label}
            <span className="text-sm font-medium dark:text-neutral-100">{sublabel}</span>
        </h2>
    )
}