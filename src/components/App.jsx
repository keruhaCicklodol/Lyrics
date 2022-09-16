import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import e from 'express';

export default function App() {
  const [input, setInput] = useState({artistName: '', songName: ''}||null);
  const [lyrics, setLyrics] = useState('');
  useEffect(() =>{console.log(lyrics); console.log(input)}, [input, lyrics])
  const getLyrics = async ()  => {
    const options = {
      method: 'POST',
      url: 'https://lyrics-search.p.rapidapi.com/search/lyrics',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'd489f2b082msh241b1a650482228p1ad90fjsn09b2ddc89d00',
        'X-RapidAPI-Host': 'lyrics-search.p.rapidapi.com'
      },
      data: `{"searchTerm":"${input}"}`
    };
     axios.request(options)
    .then(res => setLyrics(res.data))
    .catch(function (error) {
      console.error(error);
    });
  }
  const changeHandler = (e) => {
    setInput(e.target.value);
  }
  return (
    <div className="">
  <h2>Lyrics search</h2>
  {/* <div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-default">Artist</span>
    <input onChange={changeHandler} type="text" name="artistName" value={input.artistName} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
  </div> */}
  <div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-default">Song title</span>
    <input onChange={changeHandler} type="text" name="songName" value={input.songName} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
  </div>
  <button onClick={getLyrics} type="button" className="btn btn-info">Search</button>
  <div className="d-flex justify-content-center space-between" id="lyrics">{lyrics.lyrics}</div>
  </div>
  );
}
