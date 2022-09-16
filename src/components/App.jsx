import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [input, setInput] = useState({artistName: '', songName: ''}||null);
  const [lyrics, setLyrics] = useState('');
  const getLyrics = (artistName, songName) => {
    const options = {
      method: 'GET',
      url: `https://lyrics-finder1.p.rapidapi.com/${artistName}/${songName}`,
      headers: {
        'X-RapidAPI-Key': 'd489f2b082msh241b1a650482228p1ad90fjsn09b2ddc89d00',
        'X-RapidAPI-Host': 'lyrics-finder1.p.rapidapi.com'
      }
    };
    axios.request(options)
    .then(res => setLyrics(res))
    .catch(function (error) {
      console.error(error);
    });
  }
  //   fetch(`https://lyrics-finder1.p.rapidapi.com/${artistName}/${songName}`,   {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'd489f2b082msh241b1a650482228p1ad90fjsn09b2ddc89d00',
  //     'X-RapidAPI-Host': 'lyrics-finder1.p.rapidapi.com'
  //   }
  // }).then((res) => res.json())
  //   .then((data) => setLyrics(data.songLyric))
  // }
  const changeHandler = (e) => {
    setInput(e.target.value);
  }
  return (
    <div>
  <h2>Lyrics search</h2>
  <div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-default">Artist</span>
    <input onChange={changeHandler} type="text" name="artistName" value={input.artistName} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
  </div>
  <div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-default">Song title</span>
    <input onChange={changeHandler} type="text" name="songName" value={input.songName} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
  </div>
  <button onClick={() => getLyrics} type="button" className="btn btn-info">Search</button>
  <p>{lyrics}</p>
  </div>
  );
}
