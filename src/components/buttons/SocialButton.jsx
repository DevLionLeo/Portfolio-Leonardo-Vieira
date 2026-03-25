import { motion } from 'motion/react';

function SocialButton({ href, icon: Icon }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='p-4 bg-red-900 rounded-full hover:bg-rose-800 transition duration-300 cursor-pointer inline-block mt-1'
        >
            <Icon className='text-amber-50' />
        </motion.a>
    );
}

export default SocialButton;