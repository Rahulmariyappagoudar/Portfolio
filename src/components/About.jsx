import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
          <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>
              👨‍💻 Hi, I'm <strong>RahulGouda!</strong>, an undergraduate in the <strong>AI/ML</strong> branch, with a deep interest in <strong>Data Visualization</strong> and <strong>Data Analysis</strong>. 
              As a data enthusiast, I believe in the power of data to tell compelling stories and help make informed decisions. 🚀
              <br />
               I am a firm believer in <strong>God's plan</strong>, which guides me in both my personal and professional journey. 
              <br />
              🚗 Beyond coding, I have a passion for <strong>cars and bikes</strong>. They fuel my creativity and serve as a reminder of the balance between work and play.
            </p>
            <ButtonLink
              url='https://drive.google.com/file/d/19Vh0nx5JF9G_sgawb_dUIFlGSHtjp_dw/view?usp=drive_link'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
