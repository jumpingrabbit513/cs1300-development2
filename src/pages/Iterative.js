import React from 'react'

import './iterative-style.css'

import Home1 from './images/1-HOME.png'
import Demo1 from './images/1-DEMO.png'
import Project1 from './images/1-PROJECT.png'

import Edit2 from './images/2-EDIT.png'
import Demo2 from './images/2-DEMO.png'
import Share2 from './images/2-SHARE.png'
import UserPortal2 from './images/2-USER-PORTAL.png'

import Editor3 from './images/3-EDITOR.png'
import LandingScreen3 from './images/3-LANDING-SCREEN.png'
import Project3 from './images/3-PROJECT.png'

import Home4 from './images/4-HOME.png'
import Project4 from './images/4-PROJECT.png'
import StartCreating4 from './images/4-START-CREATING.png'

import wireframeHome from './images/wireframe/HOME PAGE.png'
import wireframeWhatWeDo from './images/wireframe/WHAT WE DO.png'
import wireframeLogin from './images/wireframe/LOGIN.png'
import wireframeBusinessUserDashboard from './images/wireframe/BUSINESS USER DASHBOARD.png'

import wireframeAnalytics from './images/wireframe/ANALYTICS PAGE.png'
import wireframeProjectPage from './images/wireframe/PROJECT PAGE.png'
import wireframeNewProjectPage from './images/wireframe/NEW PROJECT PAGE.png'
import BackButton from '../components/BackButton.js'





function Iterative () {
    return (
    <div>
    <nav className="navbar sticky-top navbar-expand-sm bg-light">
        <BackButton></BackButton>
    <div className="container-fluid">
        <a className="navbar-brand" href="#">iterative design</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" href="#intro">intro</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#sketches">sketches</a>
                </li>
            <li className="nav-item">
            <a className="nav-link" href="#wireframe">wireframe</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#hifi">hifi prototype</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#usertesting">user testing</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#results">results</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>

<div className="d-flex flex-column justify-content-center align-items-center section" id="section-intro">

    <h1 className="text-dark display-1" style={{"marginBottom": "20px"}}>iterative design</h1>
    <a href="#intro" className="btn-primary text-dark" role="button">read more</a>
</div>

<div id="intro" className="container-fluid section w-50">
    <h4>what's this?</h4>
    <p className="lead">in this project, we created a design from Y Combinator startup <em> <a href="https://www.ycombinator.com/companies/lancey">Lancey</a></em>. </p>
    <p className="lead">
        From their launch statement: "Lancey is a way to create interactive product demos to share with your business' prospects and customers. 
        Lancey gives them the ability to interact and engage with your product without spinning up trial 
        accounts or sandboxes in less than 5 mins right from your website." </p>

    <p className="lead">
        We needed to design an interface designer, as well as a way for users to keep track of their projects and 
    share them with <em>their</em> users. </p>
</div>


<div id="sketches" className="container-fluid text-left section w-75">
    <h4>initial sketches</h4>


    <p className="lead">to start, we created 4 different sketches for our design.</p>

    <p className="lead" style={{"marginBottom": "100px"}}>in sketches, we explored different flows from the home page, as well as different concepts of 
        editing projects.
    </p>

    <p >sketch 1: the edit project page allows users to drag and drop components + add interaction to them by right clicking:</p>

    <div className="d-flex prototype">
        <div><img className="image-fluid" src={Home1} alt="home page sketch"/></div>
        <div><img className="image-fluid" src={Demo1} alt="demo page sketch"/></div>
        <div><img className="image-fluid" src={Project1} alt="project page sketch"/></div>
    </div>

    <p>sketch 2: more component based editing, with a more clearly defined projects page (edit/view/share).</p>

    <div className="d-flex prototype">
        <div><img className="image-fluid" src={UserPortal2} alt="user portal page sketch"/></div>
        <div><img className="image-fluid" src={Share2} alt="share page sketch"/></div>
        <div><img className="image-fluid" src={Edit2} alt="edit page sketch"/></div>
        <div><img className="image-fluid" src={Demo2} alt="demo page sketch"/></div>
    </div>

    <p>sketch 3: a video based demo software instead of interactive component-based page.</p>

    <div className="d-flex prototype">
        <div><img className="image-fluid" src={LandingScreen3} alt="landing page sketch"/></div>
        <div><img className="image-fluid" src={Project3} alt="project page sketch"/></div>
        <div><img className="image-fluid" src={Editor3} alt="editor page sketch"/></div>
    </div>

    <p>sketch 4: a clearly defined analytics page design, with a vertical navbar as a menu for everything you'd want for a single project.</p>

    <div className="d-flex prototype">
        <div><img className="image-fluid" src={Home4} alt="home page sketch"/></div>
        <div><img className="image-fluid" src={StartCreating4} alt="start creating sketch"/></div>
        <div><img className="image-fluid" src={Project4} alt="project page sketch"/></div>
    </div>
</div>


<div id="wireframe" className="container-fluid text-left section w-75">
    <h4>wireframe prototype</h4>
    <p className="lead">then we created a wireframe to flush out a single design. </p>
    <p >we incorporated different sketch ideas into this single design:</p>
    <p style={{"margin-bottom":"100px"}}>sketch 1/2's component based editors + sketch 4's analytics page. </p>
    <div className="prototype d-flex">
        <div><p>home page</p><img className="image-fluid" src={wireframeHome} alt="home page sketch"/></div>
        <div><p>what we do</p><img className="image-fluid" src={wireframeWhatWeDo} alt="what we do page sketch"/></div>
        <div><p>login</p><img className="image-fluid" src={wireframeLogin} alt="login page sketch"/></div>
        <div><p>business user dashboard</p><img className="image-fluid" src={wireframeBusinessUserDashboard} alt="user dashboard page sketch"/></div>
    </div>

    <div className="prototype d-flex">
        <div><p>analytics</p><img className="image-fluid" src={wireframeAnalytics} alt="analytics page sketch"/></div>
        <div><p>project page</p><img className="image-fluid" src={wireframeProjectPage} alt="project page sketch"/></div>
        <div><p>new project page</p><img className="image-fluid" src={wireframeNewProjectPage} alt="new project page page sketch"/></div>
    </div>
</div>



<div id="hifi" className="container-fluid  section w-50">
    <h4>hi-fi prototype</h4>
    <p className="lead">finally, we created a hi-fi prototype, which refined our wireframe into a more complete product. </p>

    <p className="lead">while designing this prototype, we received some feedback: </p>
    <div className="d-flex flex-row justify-content-center" >
        <ul className = "list-group w-75" style={{"marginBottom": "30px"}}>
            <li className="list-group-item">user dashboard page: affordances weren't super clear... edit project buttons were small. we changed this so that users just click on the thumbnail of a project to edit it. </li>
            <li className="list-group-item">user dashboard page: used to have too much focus on the welcome message, and not enough on projects. We made the thumbnails area bigger to fix this</li>
            <li className="list-group-item">various pages: make sure there is always a back button that goes to the previous page in the flow</li>
            <li className="list-group-item">login page: make distinction between login and signup more clear. we moved the signup button outside of the orange box to fix this. </li>
            <li className="list-group-item">analytics should not be on the same page where users edit their project—it became too cluttered. we separated those pages to fix this.</li>
        </ul>
    </div>

    <h5>final hifi prototype</h5>

    <p className="lead">here's a video showing our hifi prototype's flow! try watching in fullscreen. </p>

    <div>
        <iframe width={"1280"} height={"720"} src="https://www.youtube.com/embed/ehLDglcQaUY"></iframe>
    </div>
</div>

<div id="usertesting" className="container-fluid section w-50">
    <h4>user testing</h4>
    <p className="lead" style={{"margin-bottom":"50px"}}>we then submitted our hifi prototype to usertesting.com so we could get some real feedback.  </p>

    <p>We prompted the users to complete this task:</p>
    
    <p>
        <em>You will be testing an interactive website mockup. The website itself is for a service that lets businesses prototype their own designs for online interfaces... so you will be testing the interface of an interface designer. 
        
        In “Flow 2” when the test begins, log into your account and find the “VideoPlayer” project. 
        
        </em></p>

        <p>
            <em>
            
            If user watch time looks low to you, edit the project and change 2 things about it. Please note that the editing won’t actually respond in this demo, but move your mouse where you would to make those edits. 
            
            If user watch time looks high, simply preview the project. 
            
            Throughout this process, please think aloud and share your thoughts with us.</em></p>

    
    <p className = "lead">We then created these post-test questions for the testers:</p>

    <ul style={{"marginBottom": "50px"}}>
        <li>How did you find the overall navigation of the site?</li>
        <li>Were you able to complete the task at hand easily?</li>
        <li>Was the hierarchy and seperation of pages clear?</li>
    </ul>

    <h5>user feedback</h5>

    <p> Overall our users were generally confused as to whether they completed the task. All the 
        users were eventually able to complete the task, but upon completion, some were unsure 
        if they had done it correctly. One user noted that he didn’t know where to login, and 
        tried using the actual Figma login page to do so. Another user found the task un-intuitive 
        because they couldn't directly edit the area we wanted them to look at, instead they had 
        to navigate to the edit button on the top of the screen rather than click on the section 
        that had the information we asked them to look at. This was our original intention with the 
        edit button but going forward we may consider allowing edits directly from our metrics page. 
        </p>
    <p style={{"margin-bottom":"50px"}}>Generally, all users struggled with the “edit two things about the project” task. After they 
        clicked on the edit button, the options that were presented to “edit” did not map internally 
        with our users signaling that this would function as an edit. They were able to figure it out, 
        but commented on the lack of clarity and were not sure if they had properly completed the task.</p>


    <h5>assessment of testing results</h5>
    <p>Overall, our test results were not in-line with our expectations. While most users were able to 
        figure out the task, they all noted the difficulty of doing so. We were expecting the task to be 
        straightforward. Based on the testing, we would add text below the login button in the top right 
        hand corner of the first screen indicating “login”. We would also add functionality to our metrics 
        dashboard that allows users to directly click on each subtitle for further exploration and edits. 
        We would also change the “components” tab on the Video Player edit screen to better represent potential 
        edits that can be made to the project. Unfortunately, our post test questions were not presented to our testers for reasons unknown to us.
    </p>

    <h5>user video links</h5>

    <ul>
        <li><a href="https://youtu.be/E5aOnvo2cqo">User 1 video</a></li>
        <li><a href="https://youtu.be/4ou1F9Ukb0s">User 2 video</a></li>
        <li><a href="https://youtu.be/l8tRo99wriI">User 3 video</a></li>
    </ul>
</div>


<div id="results" className="container-fluid  section w-50">
    <h4>results</h4>
    <p>Complications in our user testing made the efficacy of our design unclear. Had we more clearly described to the users 
        what their task on the "edit project" page was, perhaps we would have achieved more substantial feedback.
    </p>
</div>
</div>
    )
}

export default Iterative;