import Heading from "../utils/Heading";

export default function About() {
    return (
        <div className={'p-8 md:p-0 mb-10 w-full md:w-3/4 lg:w-2/5'}>
            <Heading title={"Good to know"}/>
            <p>
                I&apos;m actually available for a job, so if you&apos;re interested in my profile, don&apos;t hesitate to contact me!
                I&apos;m open to full-time, part-time, internship, apprenticeship, or even freelance. I work at $40 per hour.
            </p>
        </div>
    )
}