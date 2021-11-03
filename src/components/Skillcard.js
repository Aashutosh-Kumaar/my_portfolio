import React from 'react';

const Skillcard = ({skill: {icon,title,About} }) => 
    <div className="col-lg-6">
        <div className="skill-card">
            <img src={icon} alt="icon" className="skill-card__icon" />
             <div className="skill-card-body">
                <h6 className="skill-card-title">{title}</h6>
                <p className="skill_card__content">{About}</p>
            </div>
        </div>
    </div>
    

export default Skillcard;