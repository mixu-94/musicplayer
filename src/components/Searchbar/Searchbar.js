import React, { useState, useRef, useEffect } from 'react'
import './Searchbar.css'
import Card from '../Card/Card'
import useFetch from '../../constants/useFetch'
import { v4 as uuidv4 } from 'uuid';
import Song from '../Song/Song';


const Searchbar = () => {

const [search, setSearch] = useState("")
const inputvalue = useRef()
const [searchlist, setSearchList] = useState([])


const fetch = require('node-fetch');

const [url, setUrl] = useState(`https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem`)

useEffect(() => {
    setUrl(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`)
}, [search])

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd8419eccc3msha73f175c8a43bfbp17b581jsnd2bce36e531c',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  }
};

useEffect(() => {

    

    fetch(url, options)
	.then(res => res.json())
	.then(json => setSearchList(json))
	.catch(err => console.error('error:' + err));

}, [search])


console.log(searchlist)


function handleButton() {
    setSearch(inputvalue.current.value)
    inputvalue.current.value = ""
}

const listofsongs = () => {
    searchlist.map((item) => {
        console.log(item)
    })
}



  return (
    <div className='searchbar'>
        <div className='searchbar-wrapper'>
            <div className='searchbar-input'>
                <input ref={inputvalue} className='searchbar-input-item' type="text" placeholder="Search your Artist, Song or Album"/>
            </div>
            <div className='searchbar-button'>
                <button className='seachbar-button-item' onClick={handleButton}> Search </button>
            </div>
        </div>

        <div className='searchbar-searchlist'>
            
        </div>
    </div>
  )
}

export default Searchbar