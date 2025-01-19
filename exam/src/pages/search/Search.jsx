
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function Search() {
  const [searchQuery, setSearchQuery] = useState(""); 
  const tracks = useSelector((state) => state.player.tracks);

  const filteredTracks = tracks.filter((track) =>
    [track.title, track.artist, track.name].some((field) =>
      field.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div>
      <h2>Search Tracks</h2>
      <input
        type="text"
        placeholder="Search by track number, artist, or track name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery && (
        <ul>
          {filteredTracks.length > 0 ? (
            filteredTracks.map((track) => (
              <li key={track.id}>
                <Link to={`/musicPlayer/${track.id}`}>
                  <strong>{track.title}</strong> - {track.artist} - {track.name}
                </Link>
              </li>
            ))
          ) : (
            <p>No tracks found</p>
          )}
        </ul>
      )}
    </div>
  );
}



