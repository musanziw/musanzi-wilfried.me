import Heading from "../utils/Heading";
import QA from "../utils/QA";

export default function Faq() {
    return (
        <div className={'p-8 md:p-0 mb-10 w-full md:w-3/4 lg:w-2/5'}>
            <Heading title={"Frequently Asked questions"} subtitle={"Questions/Answers"}/>
            <div className="flex flex-col gap-5">
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