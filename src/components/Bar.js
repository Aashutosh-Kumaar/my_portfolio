import React from 'react';
import {motion} from 'framer-motion' 

const Bar = ({ value: { icon, name, level } }) => {
    const bar_width = `${level}%`

    const variants = {
        initial:{
            width:0
        },
    animate:{
        width:bar_width,
        transition:{
               duration:0.4,
               type:"spring",
               damping:5,
               stiffness:150,

        }
    }
    }

    return (
        <div className="bar">
            <motion.div className="bar__wrapper" style={{
                'width': bar_width
            }}
            variants={variants}
                initial="initial"
                animate="animate"
            >
                <span className="bar__name">
                    <img src={icon} alt="icon" className="bar__icon mr-2" />{name}
                </span>

            </motion.div>

        </div>
    );
};

export default Bar;