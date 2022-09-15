import React from "react"
export default function App() {
  return (
    <div>
  <h2>Lyrics search</h2>
  <div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-default">Artist</span>
    <input type="text" name="Artist" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
  </div>
  <div className="input-group mb-3">
    <span className="input-group-text" id="inputGroup-sizing-default">Song title</span>
    <input type="text" name="Song" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
  </div>
  <button type="button" className="btn btn-info">Search</button>
  </div>
  );
}
