import React from 'react'

import { skills } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Сайн уу <span className='blue-gradient_text font-semibold drop-shadow'>
        Энхтулга </span>байна.
        </h1>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p> Их засаг их сургуулийн КПХ-ын 323Б бүлэгт суралцдаг. </p>
        </div>

        <div className='py-10 flex flex-col '>
          <h3 className='subhead-text'>My Skills</h3>

          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill) => (
              <div className='block-container w-20 h-20'>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
              <CTA />
        </div>
    </section>
  )
}

export default About