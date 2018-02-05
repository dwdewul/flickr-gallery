import React from 'react';
import NavBar from './NavBar';


const Pictures = (props) => {
    console.log(props);
    let pictures = props.pictures.pics.map((pic) => {
        let imgSrc = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`
        return <li><img src={imgSrc} alt={pic.id} /></li>
    });

    return (
    <div className="photo-container">
    <NavBar />
        <ul>
            {pictures}
        </ul>
    </div>
    );
}

export default Pictures;