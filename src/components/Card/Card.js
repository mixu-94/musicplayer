import React from 'react';
import './Card.css'

const Card = ({setSong,title,artist,link}) => {
    

const handleClick = () =>{
setSong("playlist/1479458365")
}
    return (
        <div className='card-style' onClick={handleClick}>
            <img className='card-img' src={link} alt="music single cover"></img>
            <div className='card-text-container'>
                <h5 className='card-text'>{title}</h5>
                <p className='card-text'>{artist}</p>
            </div>
            <span class="material-symbols-outlined">
                more_vert
            </span>
        </div>
    );
}

export default Card;
