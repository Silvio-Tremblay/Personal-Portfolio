import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_xprskye',
        'template_n2yj54f',
        {
          from_name: form.name,
          to_name: "Silvio Tremblay",
          from_email: form.email,
          to_email: "sl704836@dal.ca",
          message: form.message,
        },
        'wMqbicrGKXmoIK-5E'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };


  return (
    <div className='xl:mt-12 flex xl:flex-row
    flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 
        rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          className='flex flex-col gap-8 mt-12'
          onSubmit={handleSubmit}
        >
          <label className='flex flex-col'>
            <span className='text-white 
            font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 
              placeholder:text-secondary 
              text-white rounded-lg outlined-none 
              border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white 
            font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 
              placeholder:text-secondary 
              text-white rounded-lg outlined-none 
              border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white 
            font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className='bg-tertiary py-4 px-6 
              placeholder:text-secondary 
              text-white rounded-lg outlined-none 
              border-none font-medium'/>
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 
            text-white font-bold outline-none 
            w-fit shadow-md shadow-primary 
            rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto 
        md:h-[550px] h-[350px]'>
          <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");