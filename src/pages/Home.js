import CustomNav from '../components/Navbar.js'
import WorkCard from '../components/WorkCard.js'
import Footer from '../components/Footer.js'
import '../App.css';
import data from '../info.json'

function Home() {

    const portfolioItems = data["portfolio-items"];
    const name = data.name
  
    return (
      <div>
        <div >
          <CustomNav name={name}/>
        </div>
  
        <div className='d-flex big-name flex-row'>
          <div>
          <h1 className="display-1">{name}</h1>
          <p className="lead">{data.tagline}</p>
          </div>
      
          {/* <a href="#about">about me</a> */}
        </div>
        
        <div id='projects-title' className='w-75 mx-auto'>
        <h1>projects</h1>
        <p className='lead'>click on project to view more</p>
        </div>
        
        <div className="word-card-container d-flex flex-wrap justify-content-center gap-5 mx-auto">
          {portfolioItems.map((item) => 
          <WorkCard
          title={item["title"]}
          subtitle={item["subtitle"]}
          imageURL={item["image-thumbnail"]}
          description={item["short-description"]}
          pageLink={item["page-link"]}
          />
          )}  
        </div>
  
        <div id="about" className='about d-flex flex-row justify-content-around mb-5 gap-2'>
          <h1>about me</h1>
          <p className='about-para lead'>{data.about.para1}</p>
          <p className='about-para lead'>{data.about.para2}</p>
          <p className='about-para lead'>{data.about.para3}</p>
        </div>
  
        <Footer name={name}/>
      </div>
    );
  }
  
  export default Home;
  