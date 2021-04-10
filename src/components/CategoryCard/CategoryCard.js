import React from 'react';
import {Link} from 'react-router-dom'
import img5 from '../../assets/images/img5.png';
import './CategoryCard.css';

function categoryCard({categoryName, bgImage}) {
    return(
        <div className="card-container">
            <div className="image-container">
                <img src={img5} alt="category"></img>
                <Link to="/" className="btn btn-category"><h2>categoryName</h2></Link>

            </div>
            

        </div>
    )

}
export default categoryCard;