/* eslint-disable react/no-unescaped-entities */
'use client'
import {motion } from 'framer-motion';
import {fadeIn} from '../../variants'
import { BsArrowRight } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const notify = () => toast("Email envoyé avec succès");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ne8iyfu', 'template_dvcc463', form.current, 'zU_9B3POaiaWspEr4')
      .then((result) => {
          console.log(result.text);
          notify()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='h-full bg-primary/30'>
      <ToastContainer />

      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/** text && from */}
        <div className='flex flex-col  w-full max-w-[700px] '>
          {/** text */}
          <motion.h2 
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='h2 text-center mb-12'>
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>

          {/**form */}

          <motion.form 
          ref={form} 
          onSubmit={sendEmail}
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            {/**input group */}

            <div className='flex gap-x-6 w-full'>

              <input type='text' placeholder='Name' name='from_name' className='input' />
              <input type='email' placeholder='Email' name='reply_to' className='input' />
            </div>

            <input type='text' placeholder='Subject' name='subject' className='input' />
            <textarea placeholder='message' name='message' className='textarea'></textarea>

            <button className='btn rounded-full border border-white/50 max-w-[170px] 
            px-8 transition-all duration-300 flex items-center justify-center 
            overflow-hidden hover:border-accent group' >
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 
              '>
                let's talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 groupe-hover:opacity-100 transition-all duration-300 absolut text-[22px]' />

            </button>

          </motion.form>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
