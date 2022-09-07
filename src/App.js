import './index.css';
import {useEffect} from 'react';
import api from './utils/api'
import {SongsList} from './components/songs/SongsList';
import {AddSongForm} from './components/songs/addSongForm'
import Subheader from './components/subheader'

function App() {

  // useEffect(()=> {
  //   api.getAllSongs().then((data) => console.log(data))
  // }, [])

  return (
    <div className="App">
      <header>
        <h1>Office Playlist</h1>
      </header>
      <main>
        <Subheader />
      <AddSongForm/>
      <SongsList/>
      </main>
    </div>
  );
}

export default App;
