import DinoGameProject from "../projectCards/DinoGameProject";
import NetflixCard from "../projectCards/NetflixCard";
import PythonAssistantCard from "../projectCards/PythonAssistantCard";
import { motion } from 'motion/react';

function Projects() {
    return(
        <section id="Projects" className="bg-stone-950 w-full overflow-hidden py-12 md:py-16 lg:py-20">
            <div className="max-w-350 mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
                <motion.h1 
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-blue-200 font-bold font-display hover:text-amber-50 transition mb-8 md:mb-12
                               text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-center lg:text-left">
                    Projects
                </motion.h1>
                
                <div className="flex flex-wrap flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10 xl:gap-12">
                    <DinoGameProject />
                    <NetflixCard />
                    <PythonAssistantCard />
                </div>
            </div>
        </section>
    )
}

export default Projects;