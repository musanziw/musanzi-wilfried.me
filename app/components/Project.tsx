import Heading from "../utils/Heading";
import ProjectCard from "../utils/ProjectCard";

export default function Project() {
    return (
        <div className={"p-8 md:p-0 mb-16 w-full md:w-3/4 lg:w-2/5"}>
            <Heading title={"Recent projects"}/>
            <div className="flex flex-col items-center gap-10">
                <ProjectCard
                    link={"https://github.com/musanziw/"}
                    title={"Nanny link - API"}
                    resume={"A Restful API built with NestJS. This API is used to power the NannyLink web application, providing a secure and reliable backend for the platform. The API is hosted on a dedicated server."}
                />

                <ProjectCard
                    link={"https://github.com/musanziw/"}
                    title={"Nanny link - Web"}
                             resume={"A web-based application built with NextJS and TailwindCSS developed to meet the unique needs of parents, facilitating seamless access to childcare services while empowering nannies with advanced tools for job management, event coordination, and comprehensive reporting. This professional-grade solution ensures efficient childcare, fostering a thriving community."}
                />

                <ProjectCard
                    link={"https://github.com/musanziw/"}
                    title={"Church EMP - API"}
                             resume={" A Restful API built with NestJS. This API is used to power the EmpVille web application, providing a secure and reliable backend for the platform. The API is hosted on a dedicated server."}
                />
                <ProjectCard
                    link={"https://github.com/musanziw/"}
                    title={"Church EMP - Web"}
                    resume={"A web-based application built with NextJS and TailwindCSS developed to meet the unique needs of emp church, facilitating seamless access to events for members while empowering pastors with advanced tools for member management, event coordination, and comprehensive church reporting. This professional-grade solution ensures efficient administration, fostering a thriving church community."}
                />
            </div>
        </div>
    )
}