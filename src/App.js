import { useEffect, useState } from 'react';
import Navbar from './Componentes/Navbar';
import Characters from './Componentes/Characters';
import Pagination from './Componentes/Pagination';
import Episode from './Componentes/Episode';
import Origin from './Componentes/Origin';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const iniUrl = "https://rickandmortyapi.com/api/character";

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchCharacters(iniUrl);
  }, []);

  const fetchCharacters = (url) => {
    try {
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((rta) => rta.json())
      .then((data) => {
        console.log(JSON.stringify(data));
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => {
        console.log("Error: " + error.message);
      });
    } catch (error) {
      console.log("Error: " + error.message);
    }
  };



  // Paginación
  const onPrev = () => { fetchCharacters(info.prev); };
  const onNext = () => { fetchCharacters(info.next); };

  return (
    <Router>
      <Navbar brand="Rick & Morty App" />

      <div className="container mt-5">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Characters characters={characters} />
                <Pagination prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext} />
              </>
            }
          />
          <Route path="/episodes" element={<Episode />} />
          <Route path="/origin" element={<Origin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
