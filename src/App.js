import './index.css';
import {useEffect} from 'react';
import api from './utils/api'
import {SongsList} from './components/songs/SongsList';
import {AddSongForm} from './components/songs/addSongForm'

function App() {

  useEffect(()=> {
    api.getAllSongs().then((data) => console.log(data))
  }, [])

  return (
    <div className="App">
      <AddSongForm/>
      <SongsList/>
    </div>
  );
}

export default App;
