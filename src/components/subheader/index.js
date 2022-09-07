import React from "react";

function Subheader() {

  return (
    <div className="Subheader">
      <section className="center">
        <h2 className="description">Enjoy our collaborative list of songs!</h2>
        <h2 className="description">Want to listen?</h2>
        <section>
          <a href="https://www.spotify.com" target="_blank">
            <button>Click here to listen on Spotify!</button>
          </a>
          <a href="https://www.applemusic.com" target="_blank">
            <button>Click here to listen on Apple Music!</button>
          </a>
        </section>
      </section>
    </div>
  );
}

export default Subheader;
