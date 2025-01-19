
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import icon from "../../assets/free-icon-music.png";

export function TrackList() {
  const tracks = useSelector((state) => state.player.tracks);
  const [selectedTrackId, setSelectedTrackId] = useState(null);

  const handleTrackClick = (trackId) => {
    setSelectedTrackId(trackId === selectedTrackId ? null : trackId); 
  };

  return (
    <div>
      <h2>Track List</h2>
      <ul>
        {tracks.map((track) => (
          <li
            key={track.id}
            style={{
              cursor: "pointer",
            }}
          >
              <Link to={`/musicPlayer/${track.id}`}>
                <img src={icon} alt="play"/>
              </Link>
              <span onClick={() => handleTrackClick(track.id)}>
                {track.title}
              </span>

            {selectedTrackId === track.id && (
              <div>
                <div className="marg">Artist: {track.artist}</div>
                <div className="marg">Name: {track.name}</div>
                <div className="marg">Duration: {track.duration}</div>
                <div className="marg">Format: {track.format}</div>
                <div className="marg">File Size: {track.fileSize}</div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}


