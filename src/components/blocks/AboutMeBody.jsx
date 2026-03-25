import AiImage from '../../assets/AI_NoBackground.png';
import { motion } from 'motion/react';

function AboutMeBody() {
  return (
    <section id='aboutMe' className="bg-stone-950 min-h-screen w-full overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 xl:gap-16 max-w-350 mx-auto px-6 md:px-8 lg:px-12 xl:px-16 py-12 md:py-16 lg:py-20">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left max-w-3xl lg:max-w-none order-2 lg:order-1">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-200 font-bold font-display hover:text-amber-50 transition text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl mb-6 md:mb-8">
            About Me
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-amber-50 leading-relaxed text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl mx-auto lg:mx-0">
            Sou apaixonado por tecnologia e inovação, e aos 18 anos, estou construindo minha trajetória profissional
            unindo conhecimento prático e teórico nas áreas de Inteligência Artificial, Machine Learning e
            Desenvolvimento Web. Minha jornada é marcada pela busca constante de aprendizado: já concluí um curso
            técnico em Análise e Desenvolvimento de Sistemas e atualmente estou
            cursando tecnólogo na mesma área para aprofundar ainda mais meus conhecimentos e me manter
            atualizado com as demandas do mercado.
            <br /><br />
            Com uma base sólida em desenvolvimento de sistemas, transito com facilidade entre front-end e back-end, 
            criando aplicações web completas e funcionais. Meu grande interesse, no entanto, está no universo dos 
            dados e da inteligência artificial. Busco constantemente aplicar técnicas de machine learning para 
            resolver problemas complexos e desenvolver soluções inteligentes que gerem impacto real.
            <br /><br />
            Sou determinado, curioso e tenho uma capacidade de aprendizado ágil. Estou pronto para encarar os desafios
            do futuro da tecnologia, combinando minha juventude e entusiasmo com uma formação técnica robusta e multidisciplinar.
          </motion.p>
        </div>

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="shrink-0 order-1 lg:order-2">
          <img 
            src={AiImage} 
            alt="AI Image" 
            className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-85 mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMeBody;
