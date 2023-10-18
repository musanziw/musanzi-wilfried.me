import Heading from "../utils/Heading";
import ProjectCard from "../utils/ProjectCard";

export default function Project() {
    return (
        <div className={"p-8 md:p-0 mb-16 w-full md:w-3/4 lg:w-2/5"}>
            <Heading title={"Recent projects"} />
            <div className="flex flex-col items-center gap-10">
                <ProjectCard
                    link={"https://github.com/musanziw/"}
                    title={"Home help"}
                    resume={"The home link web application is built with Next.js and Tailwind CSS. It is designed to cater to the specific requirements of parents, enabling them to conveniently access various family services such as babysitting and housekeeping. The web application relies on a robust and secure backend powered by a RESTful API developed with NestJS. This API ensures the reliability and safety of the platform, providing seamless integration between the front-end interface and the necessary data and functionality. Together, the web application and the API form a comprehensive solution that aims to enhance the user experience and meet the needs of parents seeking reliable family services."}
                />

                <ProjectCard
                    link={"https://github.com/musanziw/"}
                    title={"Church emp"}
                    resume={"The emp-ville web application is powered by a RESTful API built with NestJS, which serves as a secure and reliable backend for the platform. The web application itself is developed using Next.js and Tailwind CSS. It is designed to provide various functionalities to its members, including access to church events and programs. Additionally, department chiefs can utilize the application to submit their reports, while pastors can plan events, receive reports, and gain an overview of church activities. The combination of the web-based application and the NestJS API forms a comprehensive solution that enables seamless communication and efficient management of church-related tasks and activities."}
                />
            </div>
        </div>
    )
}