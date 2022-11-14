import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm')
      .then((response) => response.json())
      .then((response) => setData(response.tracks))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="App">
      <ul>
        {data.map((item) => (
          <li key={item.albumId}>{`Artist Name: ${item.artistName}`}</li>
        ))}
      </ul>
    </div>  
  )
}
