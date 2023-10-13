import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Project from "@/app/components/Project";
import About from "@/app/components/About";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <Hero/>
            <Services/>
            <Project/>
            <About/>
            <Contact/>
            <Footer/>
        </div>
    )
}
