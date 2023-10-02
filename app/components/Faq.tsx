import Heading from "../utils/Heading";
import QA from "../utils/QA";
import {RevealWrapper} from "next-reveal";

export default function Faq() {
    return (
        <div className={'p-8 md:p-0 mb-10 md:w-2/3 lg:w-1/3'}>
            <RevealWrapper>
                <Heading label={"Frequently Asked questions"} sublabel={"Q&A"}/>
            </RevealWrapper>
            <div className="flex flex-col">
                <QA question={"What is your availability ?"}
                    answer={"I am available for full-time work, I am also open to part-time or contract work."}
                />
                <QA question={"What is your hourly rate ?"}
                    answer={"My hourly rate is $40/hr."}
                />
            </div>
        </div>
    )
}