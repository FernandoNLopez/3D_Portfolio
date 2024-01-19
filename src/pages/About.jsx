import React from 'react';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { experiences, skills,  } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container '>
      <h1 className='head-text'> 
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow' >Fernando</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p className=''>
          Software Engineer based in Argentina - Spain, especializing in Cloud Solutions and begginer at data-science proyects.
          I am studying a bachelor's degree in Computer Science and Data Science at the University of Buenos Aires.
          I'm currently a React Developer too.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>
          My Skills
        </h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'> 
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead.text'>Works</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            As a freelance developer I have developed projects for clients, as well as educational
            ones for different courses I have taken and also simply out of passion, 
            to nourish this portfolio. Let's look!
          </p>
        </div>
        
        <div className='mt-12 flex'>
        <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

      </div>

      <hr className='border-slate-400' />

      <CTA />

    </section>
  )
}

export default About