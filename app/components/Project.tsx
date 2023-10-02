import Heading from "../utils/Heading";
import ProjectCard from "../utils/ProjectCard";

export default function Project() {
    return (
        <div className={"p-8 md:p-0 mb-16 md:w-2/3 lg:w-1/3"}>
            <Heading label={"Recent Projects"} sublabel={'My work'}/>
            <div className="flex flex-col items-center gap-10">
                <ProjectCard
                    title={"Agricultural Workforce Management System"}
                    resume={"A web-based application designed exclusively for farm operations, offering comprehensive features to efficiently manage daily laborers and tasks. Additionally, it seamlessly generates detailed expense reports categorized by tasks on a weekly basis, providing farm owners with valuable insights for informed decision-making."}
                    goals={["Manage daily laborers and tasks", "Generate detailed expense reports", "Provide valuable insights for informed decision-making"]}
                    tools={["PHP/Laravel", "UML", "Javascript", "SCSS", "MySQL", "Git & Github", "Ubuntu", "Mutual server"]}
                    position={"Backend Developer"}
                />

                <ProjectCard title={"Client Relationship Management Platform"}
                             resume={"An web application tailored specifically for startups, providing an all-in-one solution for effectively managing client contacts and establishing organized groups. This professional-grade platform enables seamless communication through SMS or Email, ensuring streamlined and personalized interactions with clients."}
                             goals={["Manage client contacts and groups", "Send SMS or Email", "Streamline and personalize interactions with clients"]}
                             tools={["PHP/Laravel", "UML", "Javascript", "SCSS", "MariaDB", "Git & Github", "Fedora", "Mutual server"]}
                             position={"Full Stack Developer"}
                />

                <ProjectCard title={"Ecclesiastical Management Solution"}
                             resume={"A web-based application developed to meet the unique needs of churches, facilitating seamless access to events for members while empowering pastors with advanced tools for member management, event coordination, and comprehensive church reporting. This professional-grade solution ensures efficient administration, fostering a thriving church community."}
                             goals={["Allow pastors to plan events", "Allow members to see church planning with ease", "Ensure efficient church administration for pastors", "Generate comprehensive church reports"]}
                             tools={["ReactJS", "Node/NestJS", "API Rest", "MariaDB", "TailwindCSS", "Git & Github", "Arch Linux", "Dedicaded server"]}
                             position={"Full Stack Developer"}
                />
            </div>
        </div>
    )
}