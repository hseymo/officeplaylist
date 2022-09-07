import React from "react";
import { useSelector } from "react-redux";
import "./index.css";

export const SongsList = () => {
  const songs = useSelector((state) => state.songs);

  const renderSongs = songs.map((song) => (
    <article className='songCard' key={song.id}>
      <h3>{song.song_name}</h3>
      <h4>{song.artist}</h4>
      <h4>{song.genre}</h4>
    </article>
  ));

  return (
    <div className="SongsList">
      <h2>Songs</h2>
      {renderSongs}
    </div>
  );
};
