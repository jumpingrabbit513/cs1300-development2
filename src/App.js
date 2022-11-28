import React, { useEffect, useState } from 'react'
import './App.css';
import Property from './components/Property';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"

import propertyImage1 from './components/images/1.jpg'
import propertyImage2 from './components/images/2.jpg'
import propertyImage3 from './components/images/3.jpg'
import propertyImage4 from './components/images/4.jpg'
import propertyImage5 from './components/images/5.jpg'
import propertyImage6 from './components/images/6.jpg'
import propertyImage7 from './components/images/7.jpg'
import propertyImage8 from './components/images/8.jpg'
import propertyImage9 from './components/images/9.jpg'
import propertyImage10 from './components/images/10.webp'
import propertyImage11 from './components/images/11.webp'
import propertyImage12 from './components/images/12.jpg'


// TODO
// price sorting

const propertyList = [
  { 
    "address": "4 Desert St.", 
    "price": 204, 
    "furnished": "furnished", 
    "beds": 3,
    "image": propertyImage1
  },
  { 
    "address": "512 Anteater Way", 
    "price": 100, 
    "furnished": "furnished", 
    "beds": 2,
    "image": propertyImage2
  },
  { 
    "address": "600 Cactus Avenue", 
    "price": 482, 
    "furnished": "furnished", 
    "beds": 4,
    "image": propertyImage3
  },
  { 
    "address": "812 Succulent Place", 
    "price": 120, 
    "furnished": "unfurnished", 
    "beds": 1,
    "image": propertyImage4
  },
  { 
    "address": "91 Shrub Road", 
    "price": 52, 
    "furnished": "furnished", 
    "beds": 1,
    "image": propertyImage5
  },
  { 
    "address": "41 Valley Road", 
    "price": 19, 
    "furnished": "unfurnished", 
    "beds": 1,
    "image": propertyImage6
  },
  { 
    "address": "238 Mouse Avenue", 
    "price": 130, 
    "furnished": "furnished", 
    "beds": 2,
    "image": propertyImage7
  },
  { 
    "address": "98 Wasteland Boulevard", 
    "price": 2, 
    "furnished": "unfurnished", 
    "beds": 0,
    "image": propertyImage8
  },
  { 
    "address": "123 Scorpion Avenue", 
    "price": 90, 
    "furnished": "furnished", 
    "beds": 2,
    "image": propertyImage9
  },
  { 
    "address": "192 Dust Bowl Lane", 
    "price": 52, 
    "furnished": "furnished", 
    "beds": 1,
    "image": propertyImage10
  },
  { 
    "address": "83 Sand Avenue", 
    "price": 10, 
    "furnished": "unfurnished", 
    "beds": 1,
    "image": propertyImage11
  },
  { 
    "address": "901 No Rain Road", 
    "price": 501, 
    "furnished": "furnished", 
    "beds": 5,
    "image": propertyImage12
  },
 ]

function App() {

  const [favorites, setFavorites] = useState([]);
  const [priceType, setPriceType] = useState("All");
  const [bedType, setBedType] = useState("All");
  const [furnishedType, setFurnishedType] = useState("All");
  const [displayedProperties, setDisplayedProperties] = useState(propertyList);
  const [sortByPrice, setSortByPrice] = useState('off');

  useEffect(() => {
    let filtered = propertyList.filter(matchesAllFilterTypes);

    if (sortByPrice == 'low-first') {
      filtered.sort(function compareFn(a,b) {return a.price - b.price});
    } else if (sortByPrice == 'high-first') {
      filtered.sort(function compareFn(a,b) {return b.price - a.price});
    }

    setDisplayedProperties(filtered);
  }, [priceType, bedType, furnishedType, sortByPrice])

  const clearAllFilters = () => {
    setPriceType("All");
    setBedType("All");
    setFurnishedType("All");
  }

  const matchesPriceFilterType = item => {
    // all items should be shown when no filter is selected
    const upperBound = Number(priceType);

    if(priceType === "All") { 
        return true;
    } else if (priceType === "large" && item.price >= 150) {
       return true;
    } else if (item.price <= upperBound && item.price >= upperBound - 50) {
        console.log("item price: " + item.price);
        console.log("upper bound: " + upperBound);
        return true;
    } else {
        return false;
    }
  }

  const isInFavorites = address => {
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i][0] === address) {
        return true;
      }
    }
    return false;
  }

  const matchesBedFilterType = item => {
    if (bedType === "All") {
      return true;
    } else if ((item.beds === Number(bedType)) || (item.beds >= 4 && bedType === "4+")) {
      return true;
    } else {
      return false;
    }
  }

  const matchesFurnishedFilterType = item => {
    if (furnishedType === "All") {
      return true;
    } else if (furnishedType === item.furnished) {
      return true;
    } else {
      return false;
    }
  }

  const matchesAllFilterTypes = item => {
    if (matchesPriceFilterType(item) && matchesBedFilterType(item) && matchesFurnishedFilterType(item)) {
      return true;
    } else {
      return false;
    }
  }

  // 3 separate select filter types
  const selectPriceFilterType = eventKey => {
      setPriceType(eventKey);
      console.log("set price filter key to: " + eventKey);
  };

  // 3 separate select filter types
  const selectBedFilterType = eventKey => {
    setBedType(eventKey);
    console.log("set bed filter key to: " + eventKey);
};

  // 3 separate select filter types
  const selectFurnishedFilterType = eventKey => {
    setFurnishedType(eventKey);
    console.log("set furnished filter key to: " + eventKey);
};

  const selectPriceSortType = eventKey => {
    if (eventKey === 'off') {
      setSortByPrice('off');
    } else if (eventKey === 'low-first') {
      setSortByPrice('low-first');
    } else {
      setSortByPrice('high-first');
    }
  }


  function addToFavorites(property) {
    let addresses = favorites.map(item => item[0]);

    if (!addresses.includes(property[0])) {
      setFavorites([...favorites, property]);
      console.log("added to favorites");
    } else {
      console.log("already added to favorites");
    }
  }

  function removeFromFavorites(property) {
    let updatedFavorites = [];

    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i][0] != property[0]) {
        updatedFavorites = [...updatedFavorites, favorites[i]]; 
      }
    }

    setFavorites(updatedFavorites);
  }

  function resetFavorites() {
    setFavorites([]);
  }

  const calculateFavoritesAverage = () => {
    if (favorites.length === 0) {
      return 0;
    }

    var total = 0;
    for (let i = 0; i < favorites.length; i++) {
      console.log(favorites[i][1])
      total += favorites[i][1];
    }

    return total / favorites.length;
  }


  return (
    <div className="App" >
      
      <div className='appbar'>
      <AppBar>
        <Toolbar>
          <IconButton>
          </IconButton>
          <Typography>
            LandDweller
          </Typography>
        </Toolbar>
      </AppBar>
      </div>

      <div id='logo'>
        <h1>LandDweller</h1>
        <h4>the internet's best burrowing buyership</h4>
        <h6>by burrowers, for burrowers</h6>
      </div>


      
      <div className=' d-flex justify-content-center flex-wrap'>
        <Navbar className='filterNav'>
          <h5 className='navTitle'>Price</h5>
          <Nav variant="pills" defaultActiveKey="All" onSelect={selectPriceFilterType}>
                <Nav.Item><Nav.Link eventKey="All">All</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="50">0-50k</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="100" >50k-100k</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="150" >100k-150k</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="large" >150k+</Nav.Link></Nav.Item>
            </Nav>
        </Navbar>

        <Navbar className='filterNav'>
          <h5 className='navTitle'>Furnished</h5>
          <Nav variant="pills" defaultActiveKey="All" onSelect={selectFurnishedFilterType}>
                <Nav.Item><Nav.Link eventKey="All">All</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="furnished" >Furnished</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="unfurnished">Unfurnished</Nav.Link></Nav.Item>
            </Nav>
        </Navbar>

        <Navbar className='filterNav'>
          <h5 className='navTitle'>Bedrooms</h5>
          <Nav variant="pills" defaultActiveKey="All" onSelect={selectBedFilterType}>
                <Nav.Item><Nav.Link eventKey="All">All</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="1">1 bed</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="2">2 bed</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="3">3 bed</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link eventKey="4+">4+ bed</Nav.Link></Nav.Item>
            </Nav>
        </Navbar>

        <button className="btn btn-secondary" onClick={() => clearAllFilters()}>reset filters</button>

      </div>

      <div className='filterbar d-flex justify-content-center flex-wrap'>
        <Navbar className='filterNav'>
            <h5 className='navTitle'>Sort By Price</h5>
            <Nav variant="pills" defaultActiveKey="off" onSelect={setSortByPrice}>
                  <Nav.Item><Nav.Link eventKey={"off"}>off</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link eventKey={"low-first"}>lowest first</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link eventKey={"high-first"}>highest first</Nav.Link></Nav.Item>
              </Nav>
          </Navbar>
      </div>

        <div className="d-flex flex-row justify-content-center">
          <div className= "all-properties-container d-flex flex-row flex-wrap justify-content-evenly" id="all-properties-container" >
            {displayedProperties.map(item => <Property 
            property={[item.address, item.price, item.furnished, item.beds, item.image]}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            inFavorites = {isInFavorites(item.address)}
            ></Property>)}
          </div>

          <div className= "favorites">
            <div className='flex-row'>
              <h2>Favorites</h2>
              <button className="btn btn-secondary"onClick={() => resetFavorites()}>reset favorites</button>
            </div>
            
            <p>average: ${calculateFavoritesAverage()}k</p>
            <div>{favorites.map(item => 
              <p className='favorites-item'>{item[0]}: ${item[1]}k</p>
            )}</div>
          </div>
        </div>
        
      <div>
      </div>



    </div>
  );
}

export default App;
