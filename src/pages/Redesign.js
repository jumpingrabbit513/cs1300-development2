import React from 'react'

import './redesign-style.css'

import nyuLogo from './images/nyu-logo.svg'
import redesignFull from './images/redesign-full.png'
import currentNYU from './images/current-nyu.png'
import lofiDesktop from './images/prototypes/lofi-desktop.png'
import lofiTablet from './images/prototypes/lofi-tablet.png'
import lofiMobile from './images/prototypes/lofi-mobile.png'
import hifiAll from './images/prototypes/hifi-all.svg'
import styleGuide from './images/prototypes/style-guide.svg'
import BackButton from '../components/BackButton.js'


function Redesign () {
    return (
    <div>
    <nav class="navbar sticky-top navbar-expand-sm bg-light">
        <BackButton></BackButton>
    <div class="container-fluid">
        <a class="navbar-brand" href="/">responsive redesign</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link" href="#goal">goal</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#current-design">current design</a>
                </li>
            <li class="nav-item">
            <a class="nav-link" href="#usability-problems">usability problems</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#testing">accessibility testing</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#prototyping">prototyping</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#results">results</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>

<div class="d-flex flex-column justify-content-center align-items-center section" id="section-intro">

    <h1 class="text-dark display-1" style={{"margin-bottom": "20px"}}>responsive redesign</h1>
    <img src={nyuLogo} alt="NYU logo" style={{"width": "20rem; "}}/>
    <a href="#goal" class="btn-primary text-dark" role="button">read more</a>
</div>

<div id="goal" class="container-fluid text-center section">
    <h4>what's this?</h4>
    <p class="lead">websites are hard to use, and they're even harder to make. </p>
    <p class="lead">
        <a href="https://nyu.edu ">nyu.edu</a> needed a redesign, so I made one. </p>
</div>

<div id="redesign" class="d-flex flex-column container-fluid justify-content-center align-items-center text-align-center w-50 section">
    <h4>redesign preview</h4>
    <p class="">you can check out my redesign <a href="https://jumpingrabbit513.github.io/nyu-redesign/nyu.html">at this link.</a></p> 
    <img src={redesignFull} alt="redesigned nyu site"/>
</div>


<div id="current-design" class="d-flex flex-column container-fluid justify-content-center align-items-center text-align-center w-50 section">
    <h4>current design</h4>
    <p class="">nyu's current site has a great aesthetic gesture.</p> 
    <p class=""> a grid of mixed-size purple boxes forms the body of the page, showing the user news, information, and social links. </p>

    <img src={currentNYU} alt="current nyu site"/>
</div>



<div id="usability-problems" class="d-flex flex-column container-fluid justify-content-center align-items-center w-75 section">
        <h4>usability problems</h4>
        <p class="lead">ISO/IEC 9126-1 definition of usability:</p> 
        <p class="w-50 text-center" style={{"margin-bottom": "50px"}}>  <i>the capability of the software product to be
            understood, learned, used and attractive to the
            user, when used under specified conditions.</i> </p>

        <p class="lead">there are some usability issues with the current interface...</p> 

        <ul class = "list-group w-50" style={{"margin-bottom": "30px"}}>
            <li class="list-group-item">boxes are color coded, but news, academic info, and socials are all mixed together, leading to difficulty searching for items</li>
            <li class="list-group-item">scan lines are incredibly nonlinear if you're looking for one of those things</li>
            <li class="list-group-item">grid hierarchy is unclear. are big or darker boxes supposed to be more important? what about boxes that have images vs. those that don't? users are confused about which ones are "higher up" in order than others. </li>
            <li class="list-group-item">general information (admissions, financial aid) are separated in a "top-links" section at the bottom or in navigation bar, while similar items exist as boxes scattered throughout the grid. there are 3 separate buttons for "admissions". which button is the correct one?</li>
            <li class="list-group-item">hovering over navbar items opens dense, confusing submenus that hide the grid</li>
        </ul>

        <p class="w-50 text-center">WebAIM Wave showed the site had no errors, except for a single contrast error.
            However, it did find 10 redundant links, a broken same page link, and a skipped heading level, which it marked as warnings.  </p>
</div>

<div id="testing" class="d-flex flex-column container-fluid justify-content-center align-items-center w-75 section">
    <h4>accessibility testing</h4>
    <p class="lead">I tested the new site's design with 4 people, and asked each of them to do 2 tasks:  </p>

    <ul class="list-group w-50" style={{"margin-bottom": "20px"}}>
        <li class="list-group-item">1) edit your pending undergraduate application</li>
        <li class="list-group-item">2) you're applying to NYU and want to mention something relevant that's happening there now... find some information for that</li>
    </ul>

    <p class="w-50 text-center" > I found that with the new design, users found the undergrad admissions button more quickly (presumably because
        of its location and associated icon). users also moved their cursors quickly to the news section during
        the second task, as they knew all of the news they would find on the home page would be in that column.
    </p>
</div>

<div id="prototyping" class="d-flex flex-column container-fluid justify-content-center align-items-center w-75 section">
    <h4>prototyping</h4>
    <p class="lead">I created some <strong>lo-fi prototypes</strong> to get the general layout down...</p>


    <div class="prototypes d-flex flex-row justify-content-start">
        <div><img class="image-fluid" src={lofiDesktop} alt="lofi desktop prototype"/></div>
        <div><img class="image-fluid" src={lofiTablet} alt="lofi tablet prototype"/></div>
        <div><img class="image-fluid" src={lofiMobile} alt="lofi mobile prototype"/></div>
    </div>

    <p class="lead">...then created a <strong>style guide</strong>...</p>
    <img class="image-fluid" id="style-guide" src={styleGuide} alt="redesign style guide"/>


    <p class="lead">...and finally some <strong>hi-fi prototypes</strong>.</p>
    <div class="prototypes d-flex flex-row justify-content-start align-items-center">
        <img src={hifiAll} alt="hifi prototypes"/>
    </div>
</div>

<div id="results" class="d-flex flex-column container-fluid justify-content-center align-items-center w-75 section">
    <h4>results</h4>
    <p class="lead">and <i>voila!</i> the site is new again.</p>
    <p class="">again, you can view my redesign <a href="https://jumpingrabbit513.github.io/nyu-redesign/nyu.html">at this link.</a></p> 
    <img src={redesignFull} alt="redesigned nyu site"/>
</div>
</div>)
}

export default Redesign;