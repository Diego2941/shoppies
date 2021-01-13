import Nominations from './components/Nominations';
import Results from './components/Results';
import Search from './components/Search';

import './App.css';
import Movie from './components/Movie';

function App() {
  return (
    <main>
        <h2 className="header"> 
          The Shoppies
        </h2>
        <Search />
        <Results />
        <Nominations />
        <Movie />
    </main>
  );
}

export default App;
