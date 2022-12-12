import React from 'react';
import {Container} from 'react-bootstrap';
import "../index.css"



const WorkCard = ({title, subtitle, description, imageURL, pageLink}) => {

    const goToProjectLink = () => {
        window.open(pageLink, "_self");
    }

    return (
        <div className='work-card'>
            <img className="project-image" src={imageURL} alt="project image" onClick={goToProjectLink}/>

            <div className='card-bottom'>
            <h2 className='project-title m-0 mask overlay'>{title} </h2>
            <p className='project-subtitle lead'>{subtitle}</p>
            <p className="project-description">{description}</p> 
            </div>

        </div>
    )
}

export default WorkCard