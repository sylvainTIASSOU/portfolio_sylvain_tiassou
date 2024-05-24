/* eslint-disable react/no-unescaped-entities */
import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center '>
      <Circles />
      <div className='container mx-auto '>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/**text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-5 xl:mb-0'>
            <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            
             className='text-[25px] leading-tight md:text-[34px] md:leading-[1.3] mb-4 font-semibold xl:mt-3'>
              My services <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p
             variants={fadeIn('up', 0.4)}
             initial='hidden'
             animate='show'
             exit='hidden'
            className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              Mes services variés, dont Analyse de données, creation des models de ML, développement web et mobile, conception
               d'interfaces, création d'API, intégration de technologies émergentes, 
               optimisation des performances, sécurité informatique,
               consultation, formation, et maintenance des applications.
            </motion.p>
          </div>

          {/** slider */}
          <motion.div
          variants={fadeIn('down', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='w-full xl:max-w-[65%]'>
             <ServiceSlider />
          </motion.div>
         
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
