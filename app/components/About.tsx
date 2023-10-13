import Heading from "../utils/Heading";

export default function About() {
    return (
        <div className={'p-8 md:p-0 mb-10 w-full md:w-3/4 lg:w-2/5'}>
            <Heading title={"Good to know"}/>
            <p>
                I am currently available for employment and I would be delighted to hear from you if my profile aligns
                with your requirements. I am open to opportunities in full-time, part-time, internships,
                apprenticeships, or even freelance work. My rate is $40 per hour.
            </p>
        </div>
    )
}