import React from 'react';
import star from '../assets/icons/star.svg'
import Skillcard from './Skillcard';
import {motion} from 'framer-motion'


const skills = [
    {
        icon: star,
        title: "Java FullStack Development",
        About: ["Made a Login,Registration page having CRUD Operation using ", <strong key={1}> STS, SQL.</strong>]
    },
    {
        icon: star,
        title: "Azure Cloud Migration",
        About: ["Learning the concept of Cloud Azure (Microsoft) for ", <strong key={1}> Migration.</strong>]
    },
    {
        icon: star,
        title: "Frontend Development",
        About: ["I can built SPA using ", <strong key={1}>HTML, CSS & React. </strong>]
        
    },

    {
        icon: star,
        title: "UI/UX",
        About: ["Minimalistic user interface designer.", ]
    }
    // {
    //     icon: api,
    //     title: "Lorem ipsum",
    //     About: "lorem ipsum 8"
    // }
        
]
const About = () => {
    const about_variant= {

        hidden: {
        opacity: 0
            
        },
        visible: {
            opacity: 1,
            
            transition: {
                delay:0.2, duration:0.6
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
        <motion.div className ="About"
            variants={about_variant}
            initial='hidden'
            animate='visible'  
            exit="exit"    
        
        >
            <h2 className="About__intro">
                I describe myself as someone who's persistent,a quick learner and loves problem solving by using simple and scalable solutions.
            </h2>
            <div className="container About__container">
                <h6 className="About__heading">What I do</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                        <Skillcard skill={skill} />
                        )
                    }
                </div>
            </div>
        </motion.div>
    );
};

export default About;