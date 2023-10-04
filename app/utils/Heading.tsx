interface HeadingProps {
    label: string,
    sublabel: string
}

export default function Heading({label, sublabel}: HeadingProps) {
    return (
        <h2 className="flex flex-col gap-1 pt-3 font-semibold mb-8 text-zinc-950 dark:text-white">
            {label}
            <span className="text-xs uppercase font-medium dark:text-neutral-100">{sublabel}</span>
        </h2>
    )
}