import React from 'react'
import BackButton from '../components/BackButton.js'
import landDweller from './images/landdweller.png'

const Development = () => {
    return(
    <div>
        <nav className="navbar sticky-top navbar-expand-sm bg-light">
            <BackButton></BackButton>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">development</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link" href="#intro">intro</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#usability-principles">usability</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>


    <div className="d-flex flex-column justify-content-center align-items-center section" id="section-intro">
    <h1 className="text-dark display-1" style={{"margin-bottom": "20px"}}>LandDweller</h1>
    <h1 className="text-dark display-6" style={{"margin-bottom": "20px"}}>website development</h1>
    </div>

    <div id="intro" className="container-fluid section w-50">
    <h4>what's LandDweller?</h4>
    <p className="lead">LandDweller is a housing site for small desert creatures that might be seeking a new burrowing home. Listed in each housing property are various pieces of information about the burrow property, including price, address, bedcount, furnishings, and an image. Users can "favorite" properties that they're interested in, and the panel on the site keeps track of their favorites' average price.</p>
    </div>


    <div id="deploy" className="container-fluid w-50">
    <h4>deployed site</h4>
    <p>click to view!</p>
    </div>

    <div className='d-flex justify-content-center'>
        <a href="https://jumpingrabbit513.github.io/cs1300-development2/" target="_blank">
        <img style={{"width" : "60vw", "margin-bottom" : "100px"}} src={landDweller} alt="land dweller site"/>
        </a>
    </div>

    <div id="usability-principles" className="container-fluid section w-50">
    <h4 style={{"margin-bottom":"40px"}}>usability principles considered</h4>

    <h5>usability</h5>
    <p className="lead">properties are marked clearly with large images and significant margins that separate them. the price is marked in large text, so users can be sure that they're looking at properties they can afford. also, the flexbox item container that houses all the properties adapts well to different screen sizes so that users can clearly see which buttons correspond with which property.</p>

    <h5>learnability</h5>
    <p className="lead">filters and sorting are marked clearly at the top, next to each other. the navbar visual implementation suggests correctly that only one filter option may be selected at a time.</p>
    
    <h5>memorability</h5>
    <p className="lead">reset buttons on the filter and favorites list are marked in grey, while the "add to favorites" button is a colorful blue, which both help convey the idea of the action and help the user remember what they do without having to read the text.</p>

    </div>

    
    </div>
    
    )
}

export default Development