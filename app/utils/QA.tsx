interface QAProps {
    question: string;
    answer: string;
}

export default function QA({question, answer}: QAProps) {
    return (
        <div className={'flex flex-col gap-2'}>
            <div className={'flex items-center justify-between'}>
                <h4 className={'font-medium text-zinc-950 dark:text-white '}>
                    {question}
                </h4>
            </div>
            <p className={'text-sm'}>
                {answer}
            </p>
        </div>
    )
}