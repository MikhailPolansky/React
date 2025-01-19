
import React, { useState, useEffect, useRef} from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setTrack } from "../../store/slice/player.slice";

import backgroundVideo from '../../assets/video9.mp4'


export function MusicPlayer() {
  
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.player.tracks);
  const { id } = useParams();
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false) 
  const videoRef = useRef(null);

  useEffect(() => {
         const selectedTrackIndex = tracks.findIndex((t) => t.id === id);

         if (selectedTrackIndex !== -1) {
           setTrackIndex(selectedTrackIndex);
           setIsPlaying(true)
           dispatch(setTrack(tracks[selectedTrackIndex]))
          }
          }, [id, tracks, dispatch]);

          useEffect(() => {
            if (isPlaying && videoRef.current) {
              videoRef.current.play();
            } else if (videoRef.current) {
              videoRef.current.pause();
            }
          }, [isPlaying]);

  const handleClickNext = () => {
    setTrackIndex((prevIndex) => (prevIndex + 1) % tracks.length);
    setIsPlaying(true)
  };

  const handleClickPrevious = () => {
    setTrackIndex((prevIndex) => prevIndex === 0 ? tracks.length - 1 : prevIndex - 1);
    setIsPlaying(true)
  };

  const handlePlay = () => {
    dispatch(setTrack(tracks[trackIndex]));
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false); 
  };

  const handleTrackEnd = () => {
    handleClickNext(); 
  };

  return (
    <div>
      <h2>Music Player</h2>

      <div className="screen">
        <div className="view" 
          style={{position: "relative"}}
        >
          <video 
            // autoPlay
            ref={videoRef}
            loop
            muted
            style={{
              position: "absolute",
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>

          <div className="vid"
            style={{
              position: "relative",
              color: "white",
              padding: "20px",
              height: '55vh'
            }}
          >
            <h3>{tracks[trackIndex].title}</h3>
            <h4>👤 {tracks[trackIndex].artist}</h4>
            <h4>🎵 {tracks[trackIndex].name}</h4>
          </div>
        </div>
        
        <div className="view">
          <AudioPlayer
          src={tracks[trackIndex].url}
          autoPlay={isPlaying}
          showSkipControls={true}  
          onClickNext={handleClickNext}  
          onClickPrevious={handleClickPrevious}  
          onPlay={handlePlay}
          onPause={handlePause}
          onEnded={handleTrackEnd}
          />
        </div>
      </div>
    </div>
  );
}














