import React from "react";

function Subheader() {
  return (
    <div className="Subheader">
        <h2>Enjoy our collaborative list of songs! Want to listen?</h2>
      <section>
        <a href="https://www.spotify.com" target="_blank">
          <button>Click here to listen on Spotify!</button>
        </a>
        <a href="https://www.applemusic.com" target="_blank">
          <button>Click here to listen on Apple Music!</button>
        </a>
      </section>
    </div>
  );
}

export default Subheader;
