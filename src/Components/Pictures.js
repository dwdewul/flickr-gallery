import React from 'react';
import Picture from './Picture';

const Pictures = (props) => {
    console.log(props);
    let pictures = props.pictures.pics.map((pic) => {
        let imgSrc = `https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}.jpg`
        return <img src={imgSrc} alt={pic.id} />
    });

    return (
    <div>
        <p>Loading is: {props.pictures.loading.toString()}</p>
        <div>
            {pictures}
        </div>
    </div>
    );
}

export default Pictures;