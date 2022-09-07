import {SongsList} from './components/songs/SongsList';
import {AddSongForm} from './components/songs/addSongForm'
import Subheader from './components/subheader'

function App() {

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
