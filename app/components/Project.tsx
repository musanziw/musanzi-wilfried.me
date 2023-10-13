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
                             resume={"A web-based application built with Next.js and Tailwind CSS, developed to meet the unique needs of parents, facilitating seamless access to family services such as babysitting and housekeeping."}
                />

                <ProjectCard
                    link={"https://github.com/musanziw/"}
                    title={"Church emp - API"}
                             resume={"A Restful API built with NestJS. This API is used to power the EmpVille web application, providing a secure and reliable backend for the platform. The API is hosted on a dedicated server."}
                />
                <ProjectCard
                    link={"https://github.com/musanziw/"}
                    title={"Church emp - Web"}
                     resume={"A web-based application built with Next.js and Tailwind CSS, developed to allow members to access church events and programs, department chiefs to render their reports, and pastors to plan events, receive reports, and have an overview of church activities."}
                />
            </div>
        </div>
    )
}