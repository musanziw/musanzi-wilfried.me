import {RevealWrapper} from "next-reveal";

interface QAProps {
    question: string;
    answer: string;
}

export default function QA({question, answer}: QAProps) {
    return (
        <div className={'flex flex-col mb-4'}>
            <RevealWrapper>
                <div className={'flex items-center justify-between mb-2'}>
                    <h4 className={'font-medium text-zinc-950 dark:text-white '}>
                        {question}
                    </h4>
                </div>
                <p className={'text-sm'}>
                    {answer}
                </p>
            </RevealWrapper>
        </div>
    )
}