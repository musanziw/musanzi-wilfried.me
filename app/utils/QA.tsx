interface QAProps {
    question: string;
    answer: string;
}

export default function QA({question, answer}: QAProps) {
    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'flex items-center justify-between'}>
                <p className={'font-medium text-zinc-950 dark:text-white '}>
                    {question}
                </p>
            </div>
            <p className={'text-sm'}>
                {answer}
            </p>
        </div>
    )
}