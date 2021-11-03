import React from 'react';
import Bar from './Bar';
import react from '../assets/icons/react.svg'
import {
    motion
} from 'framer-motion'

const languages = [

    {
        icon: react,
        name: 'C',
        level: '65'
    },
    {
        icon: react,
        name: 'Core Java',
        level: '80'
    },

    {
        icon: react,
        name: 'HTML & CSS',
        level: '70'
    },
    {
        icon: react,
        name: 'Spring ',
        level: '60'
    },
    {
        icon: react,
        name: 'React',
        level: '55'
    },
    {
        icon: react,
        name: 'JS',
        level: '44'
    },
    {
        icon: react,
        name: 'SQL',
        level: '50'
    }


]

const tools = [
    {
        icon: react,
        name: 'Eclipse Java',
        level: '60'
    },
    {
        icon: react,
        name: 'Git Hub',
        level: '50'
    },
    {
        icon: react,
        name: 'Visual Studio Code',
        level: '80'
    },
    {
        icon: react,
        name: 'Sublime Text',
        level: '85'
    },
    {
        icon: react,
        name: 'STS',
        level: '60'
    },

]

const Resume = () => {

    const resume_variant = {

        hidden: {
            opacity: 0

        },
        visible: {
            opacity: 1,

            transition: {
                delay: 0.2,
                duration: 0.6
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }
    return ( 
        <motion.div className = "container resume"
        variants = {
            resume_variant
        }
        initial = 'hidden'
        animate = 'visible'
        exit = "exit"
        >

        <div className = "row" >
        <div className = "col-lg-6 resume-card" >
        <h4 className = "resume-card__heading" >
        Education </h4> 
        <div className = "resume-card__body" >
        <h5 className = "resume-card__title" >
        Computer Science Engineering </h5> 
        <p className = "resume-card__name" >
        Academy of Technology(2015 - 2019) < br / >
        <p className = "resume-card__name1" >
        Affilated by MAKAUT(formely known as WBUT) 
        </p> 
        </p> 
        <p className = "resume-card__details" >
        B - Tech in Computer Science & Engineering < br / >
        DGPA: 6.67

        </p>
        </div> 
        </div> 


        {
            <div className="col-lg-6 resume-card">
                <h4 className="resume-card__heading">
                Experience
                </h4>
                <div className="resume-card__body">
                    <h5 className="resume-card__title">
                        Tech Mahindra (Nov 2020-Present)
                    </h5> 
                    <p className="resume-card__name">
                        Associate Software Engineer <br />
                        
                        Noida, UP, India.
                    </p>
                    <p className="resume-card__details">
                        Internship (3 Months)<br />
                        Java FullStack Development using Angular JS<br />
                        Bangalore, Karnataka,India.
                    </p> 
                </div> 
            </div> 
        } </div>

        <div className = "row" >
        <div className = "col-lg-6 resume-languages" >
        <h5 className = "resume-language__heading" >
        Language and Framework </h5> 
        <div className = "resume-language__body mr-3" > {
            languages.map(language =>
                <Bar value = {
                    language
                }
                />
            )
        } 
        </div> 
        </div>

        <div className = "col-lg-6 resume-languages" >
        <h5 className = "resume-language__heading" >
        Tools and Softwares </h5> <
        div className = "resume-language__body mr-3" > {
            tools.map(tool =>
                <Bar value = {
                    tool
                }
                />
            )
        } 
        </div> 
        </div> 
        </div> 
        </motion.div>
    );
};

export default Resume;