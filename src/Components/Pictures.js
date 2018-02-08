import React from 'react';


const Pictures = (props) => {
    let pictures = props.pictures.pics.map((pic) => {
        let imgSrc = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`
        return <li key={pic.id}><img src={imgSrc} alt={pic.id} /></li>
    });

    return (
    <div className="photo-container">
        <ul>
            {pictures}
        </ul>
    </div>
    );
}

export default Pictures;