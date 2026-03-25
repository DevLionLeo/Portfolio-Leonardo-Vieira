import React, { useState } from 'react';
import profilePhoto from '../../assets/profile.png';
import { motion } from 'motion/react';
import { Linkedin, Github, Mail } from 'lucide-react';
import DownButton from '../buttons/DownButton';
import SocialButton from '../buttons/SocialButton';

/*Function for copying the email*/
function CopyButton() {
    const [copied, setCopied] = useState(false);

    const handleCopy = async (text) => {
        try {
            await navigator.clipboard.writeText("leonardo.vieira180308@hotmail.com");
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
        catch (err) {
            console.error('Falha ao copiar:', err);
        }
    };

    return (
        <div className="relative" onClick={handleCopy}>
            <SocialButton icon={Mail} />
            {copied && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                    Copiado!
                </span>
            )}
        </div>
    );
}

/*Principal function*/
function HomeBody() {
    return (
        <section id='home' className='bg-stone-950 min-h-screen w-full overflow-hidden'>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-8 xl:gap-16 max-w-350 mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20">
                
                {/* Left side - Text Content */}
                <div className='flex-1 text-center lg:text-left max-w-2xl lg:max-w-none 2xl:ml-30'>
                    <h1 className="font-display text-blue-200 font-bold mb-4 hover:text-amber-50 transition 
                                   text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-7xl">
                        Leonardo Vieira
                    </h1>
                    <p className="font-display text-amber-50 
                                  text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl
                                  max-w-md md:max-w-lg lg:max-w-none mx-auto lg:mx-0
                                  lg:w-auto xl:w-120">
                        AI / ML Engineer & Web Developer
                    </p>

                    <div className='mt-7 gap-4 sm:gap-6 flex justify-center lg:justify-start'>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            <button className='p-4 bg-red-900 rounded-full hover:bg-rose-800 transition duration-300 cursor-pointer inline-block'>
                                <a href="https://www.linkedin.com/in/leonardo-vieira-fullstack/">
                                    <Linkedin className='text-amber-50 ' />
                                </a>
                            </button>
                        </motion.button>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}>
                            <button className='p-4 bg-red-900 rounded-full hover:bg-rose-800 transition duration-300 cursor-pointer inline-block'>
                                <a href="https://github.com/DevLionLeo">
                                    <Github className='text-amber-50  ' />
                                </a>
                            </button>
                        </motion.button>

                        <CopyButton />
                    </div>
                </div>

                {/* Right side - Image */}
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className='shrink-0'>
                    <div className='bg-red-950 border-4 border-amber-50 rounded-3xl animate-float  2xl:pl-2'>
                        <img 
                            src={profilePhoto} 
                            alt="Profile Image" 
                            className="w-64 sm:w-80 md:w-96 lg:w-100 xl:w-117 2xl:w-100"
                        />
                    </div>
                </motion.div>
            </div>

            <a href="#aboutMe">
                <div className='flex justify-center pb-8 md:pb-12 lg:pb-16'>
                    <DownButton />
                </div>
            </a>
        </section>
    )
}

export default HomeBody;