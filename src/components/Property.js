
import React from 'react'

function Property(props) {

    const property = props.property;
    const [address, price, furnished, beds, image] = property;
    const addToFavorites = props.addToFavorites;
    const removeFromFavorites = props.removeFromFavorites;
    const inFavorites = props.inFavorites;

    const buttons = () => {
        if (inFavorites) {
            return (<div className = 'fav-button-container'>
                        <button className="btn btn-secondary fav-button"onClick={() => removeFromFavorites(property)}>remove from favorites</button>
                    </div>)
        } else {
            return (<div className='fav-button-container'>
                 <button className="btn btn-primary fav-button"onClick={() => addToFavorites(property)}>add to favorites</button>
            </div>)
        }
    }

    return (
        <div className="property-container">
            <img id="property-image" src={image} alt="property image"/>
            <div className="d-flex justify-between" id="property-bottom">
                <div className="property-info">
                    <h3 style={{'marginBottom': '0px'}}>${price}k</h3>
                    <p style={{'marginBottom': '0px'}}>{furnished}</p>
                    <p style={{'marginBottom': '0px'}}>{beds} bed</p>
                    <p>{address}</p>
                </div>
               {buttons()}
            </div>
        </div>
    )
}

export default Property;