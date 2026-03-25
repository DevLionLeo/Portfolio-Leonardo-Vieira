import { motion } from 'motion/react';
import NetflixImage from "../../assets/NetflixImage.png";

function NetflixCard() {
    return(
        <a href="https://devlionleo.github.io/NetflixCopy/"
           className="w-full lg:w-auto block"
           target="_blank"
           rel="noopener noreferrer">
            <div className="w-full max-w-125 lg:w-112.5 xl:w-125 2xl:w-137.5 bg-red-950 rounded-2xl hover:shadow-2xl transition-shadow duration-300 mx-auto">
                <motion.div 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }}
                    className="p-4 sm:p-5 md:p-6">
                    <div className="w-full rounded-2xl cursor-pointer">
                        <img 
                            src={NetflixImage} 
                            alt="Netflix Copy" 
                            className="w-full h-auto rounded-lg object-cover"
                        />
                        <h2 className="text-amber-50 text-center sm:text-left text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-display mt-4 sm:mt-5 md:mt-6">
                            Netflix Copy
                        </h2>
                        <p className="text-blue-200 mt-2 sm:mt-3 md:mt-4 text-center sm:text-left text-sm sm:text-base md:text-lg"> Technologies: <span className="text-amber-50">HTML 5, CSS 3, JavaScript.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </a>
    )
}

export default NetflixCard;