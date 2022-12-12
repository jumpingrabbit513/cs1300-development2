import React from 'react'
// import { Nav } from 'react-bootstrap';
// import Navbar from '../components/Navbar.js'
import PersonasStyle from './personas-style.css'
import selfserve from '../pages/images/cocacolaselfserve.png'
import mainmenu from './images/mainmenu.png'
import submenu from './images/submenu.png'
import sarah from './images/sarah.svg'
import chloe from './images/chloe.svg'
import sarahBoard from './images/sarah-board.png'
import chloeBoard from './images/chloe-board.png'
import white from './images/white.png'
import BackButton from '../components/BackButton.js'


const Personas = () => {
return (
<div>
<nav className="navbar sticky-top navbar-expand-sm bg-light">
    <BackButton></BackButton>
    <div className="container-fluid">
        <a className="navbar-brand" href="/">personas & storyboarding</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" href="#goal">goal</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#design">design</a>
                </li>
            <li className="nav-item">
            <a className="nav-link" href="#interviews">interviews</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#responses">responses</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#observations">observations</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#personas">personas</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#storyboards">storyboards</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#results">results</a>
            </li>
        </ul>
        </div>
    </div>
</nav>

<div className="d-flex flex-column justify-content-center align-items-center section">
    <img src={selfserve} alt="coca cola self serve 7000 icon"/>
    <h1 className="text-dark display-1">ui observation:</h1>
    <h2 className="text-dark">coca cola self-serve 7000</h2>
    <a href="#goal" className="btn-primary text-dark" role="button">read more</a>
</div>

<div id="goal" className="container-fluid text-left w-50 section">
    <h4>goal</h4>
    <p className="lead">knowing your users and their stories is key to making an effective interface.</p>
    <p className="lead">we observed and interviewed users of the ratty's coca-cola self-serve 7000, created user personas, 
                    and drew storyboards in an attempt to evaluate the soda machine's interface. </p>
</div>

<div id="design" className="d-flex flex-column container-fluid justify-content-center align-items-center w-75 section">
    <h4>interface design</h4>
    <p className="lead">the self-serve 7000 begins on a main screen page with an assortment of drink choices. </p>
    <img src={mainmenu} alt="main menu screen" style={{"width":"80%"}}/> 
    <p className="lead">after selecting a drink, there is often a submenu with flavor options for that specific drink. </p>
    <img src={submenu} alt="main menu screen" style={{"width":"80%"}}/>
    <p className="lead">users may pour ice at any time, but may only fill a drink after it has been selected. </p>
</div>

<div id="interviews" className="d-flex flex-column container-fluid justify-content-center align-items-center w-75 section">
        <h4>interviews</h4>
        <div>
            
            <p className="lead">we asked 3 users to answer the following questions:</p>
            <div className="questions-container">
                <ul>
                    <li>
                        in your opinion, how effective is the coca-cola soda dispenser machine?
                        <div className="input-group btn-group radio d-flex flex-column w-100 text-left">
                            
                            <div><input type="radio" name="how-effective"/>very effective </div>
                            <div><input type="radio" name="how-effective"/>somewhat effective </div>
                            <div><input type="radio" name="how-effective"/>a little effective </div>
                            <div><input type="radio" name="how-effective"/>not effective </div>
                            
                        </div>
                    </li>
                    <li>how long have you used this model of soda dispenser?</li>
                    <li>what drink do you usually get?
                        <ul>
                            <li>if water: do you usually go here to get your water?
                                <ul><li>if yes: why do you usually get water here?</li></ul>
                            </li>
                        </ul>
                    </li>
                    <li>what is the easiest part about using the Coca-Cola soda dispenser?</li>
                    <li>what is the hardest part about using the Coca-Cola dispenser?</li>
                    <li>why did you choose the soda dispenser today? (check all that apply)
                        <div className="input-group btn-group checkbox d-flex flex-column" >
                            <div><input type="checkbox"/>to try it out for the first time</div>
                            <div><input type="checkbox"/>because I saw someone else use it</div>
                            <div><input type="checkbox"/>to get a drink that I usually get</div>
                            <div><input type="checkbox"/>because it was close to me</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</div>

<div id="responses" className="d-flex flex-column container-fluid justify-content-center align-items-center w-75 section">
    <h4>responses</h4>
    <p className="lead">
        how users responded to the above questions
    </p>
    <ul class = "list-group ">
        <li className="list-group-item">the machine is "very" or "somewhat" effective</li>
        <li className="list-group-item">experience range: new user - 2 years</li>
        <li className="list-group-item">some typically get soda, some get water</li>
        <li className="list-group-item">if they're getting water, they pick it because it's close</li>
        <li className="list-group-item">easiest part: there's only one physical drink dispenser</li>
        <li className="list-group-item">hardest part: slow/unresponsive touch screen</li>
        <li className="list-group-item">2/3 users had a regular drink choice</li>
        <li className="list-group-item">users would return to use the machine in the future</li>
    </ul>
</div>

<div id="observations" className="d-flex flex-column container-fluid justify-content-center align-items-center w-75 section">
    <h4>observations</h4>
    <p className="lead">
        objective observations noted during usage
    </p>
    <ul class = "list-group">
        <li className="list-group-item">all users got ice</li>
        <li className="list-group-item">all users poured ice before selecting drink</li>
        <li className="list-group-item">all users kept one hand on their cup throughout their usage</li>
        <li className="list-group-item">drink choices: coke, vitamin water, and water</li>
        <li className="list-group-item">the water user didn't look at the interface long</li>
        <li className="list-group-item">the vitamin water user browsed flavors before selecting</li>
        <li className="list-group-item">both flavored drink users spent more time on the flavor page than the main page</li>
    </ul>
</div>

<div id="personas" className="d-flex flex-column container-fluid align-items-center w-75 section">
    <h4>personas</h4>
    <p className="lead">
        user personas created based on responses and observations
    </p>
    <div className="d-flex flex-row justify-content-around">
        <div style={{"width":"40%"}}>
            <p id="sarah-intro">Sarah is a first-year who is still solidifying her friend group. She got out of 
                class just in time for the dining hall dinner rush, when lines are long and open 
                tables are scarce. The soda machine isn’t as quick as she’d hoped, and there are 
                too many options to choose from. Like Sarah, many Brown first-years are also new 
                to the dining hall, and getting a drink quickly is critical to getting a good seat 
                at the table with their new friends. </p>
            <img src={sarah}  width="100%" alt="persona 1: social sarah is busy, 
            and doesn't care what kind of drink she gets, as long as she can get back to her 
            table in time"/>
        </div>
        <div>

        </div>
        <div style={{"width":"40%"}}>
            <p>Chloe is a junior coming to the dining hall alone for breakfast before a quiet 
                morning study session.  She keeps her headphones on and watches YouTube videos 
                while she eats, and is in little rush to get to the library. Like Chloe, many 
                Brown students are also more experienced with machines in the dining halls, and 
                know exactly what they want. Using the soda machine takes a back seat in their 
                minds as they focus on other things important to their days. </p>
            <img src={chloe} width="100%" alt="persona 2: calm chloe is less 
            pressed for time, and usually gets water. she takes her time as she fills both 
            ice and water, before eating alone. "/>
        </div>
    </div>
</div>

<div id="storyboards" className="d-flex flex-column container-fluid justify-content-center align-items-center w-75 section">
    <h4>storyboards</h4>
    <p className="lead">
        storyboards based on the above user personas
    </p>
    <br></br>
    <h3>social sarah</h3>
    <img src={sarahBoard} style={{"width": "95%"}}  alt="persona 1: social sarah is busy, and doesn't care what kind of drink she gets, as long as she can get back to her table in time"/>



    <h3>calm chloe</h3>
    <img src={chloeBoard} style={{"width": "99%"}}  alt="persona 2: calm chloe is less pressed for time, and usually gets water. she takes her time as she fills both ice and water, before eating alone. "/>

    <div className="d-flex flex-row justify-content-around">
        <img src={white} style={{"width": "2%"}} alt=""/>
    </div>
</div>

<div id="results" className="d-flex flex-column container-fluid justify-content-center align-items-center w-75 section">
    <h4>results/remarks</h4>
    <p className="lead">
        given the range in usage—-new users, experienced users, browsers, and regular drink-getters—-
        the self-serve 7000's interface seems to lie in a happy middle ground. users who have a 
        drink in mind can find it easily, and browsers are allowed to dive into submenus for specific
        flavors, rather than seeing every flavor of every soda at once. 
    </p>
    <p>Note: code from bootstrap's reference pages was used to create and format the inputs in the "interviews" section, 
        and code from Jeff's bootstrap tutorial was used for the navbar.</p>
</div>

</div>)
}

export default Personas;