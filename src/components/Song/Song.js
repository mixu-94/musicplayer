import React from 'react'
import './Song.css'


const Song = ({img, imgalt, key, title, time}) => {
  return (
    <div className='song' key={key}>
        <div className='song-image'>
            <img src={img} alt={imgalt}/>
        </div>
        <div className='song-title'>
            {title}
        </div>
        <div className='song-length'>
            {time}
        </div>
    </div>
  )
}

export default Song