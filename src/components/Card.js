import React from 'react';

const Card = () => {
    return (
        <div className='card-style'>
            <img className='card-img' src='https://www.theweeknd.com/sites/g/files/aaj15051/f/styles/suzuki_breakpoints_image_mobile-lg_sq/public/release/201609/818cf2dcae465de2c48c791829b1ca03606989a1?itok=BlI82QMA'></img>
            <div className='card-text-container'>
                <h4 className='card-text'>Blind ....</h4>
                <p className='card-text'>The weekend</p>
            </div>
            <span class="material-symbols-outlined">
                more_vert
            </span>
        </div>
    );
}

export default Card;
