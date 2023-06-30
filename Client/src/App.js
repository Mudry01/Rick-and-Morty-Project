import { useState } from 'react';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeFavorite } from './redux/actions.js';

import './App.css';

import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/navBar';
import Detail from './components/views/Detail/Detail';
import About from './components/views/About/About';
import ErrorPage from './components/views/error/errorPage.jsx';
import LandingPage from './components/views/LandingPage/LandingPage';
import Favorites from './components/views/Favorites/Favorites.jsx';

function App() {
  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = '1Password';

  //FUNCION DE LOGEO
  async function login(userData) {

    try{
      if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
      }
    } catch (error) {
      console.log(error)
    }
  }

  // PARA EL MOMENTO DEL MONTAJE VERIFIQUE SI TENGO O NO ACCESO
  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  //FUNCION DE LOGOUT

  function handleLogout() {
    setAccess(false);
    navigate('/');
  }

  // FUNCION  QUE BUSCA POR ID
  async function searchHandler(id) {
    if (!characters.find((element) => element.id === parseInt(id))) {
      try {
        const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
        const data = response.data;
        
        if (data.name) {
          await new Promise((resolve) => setTimeout(resolve, 300)); // Agrega un retraso de 300 milisegundos (0.3 segundos)
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      } catch (error) {
      }
    } else {
      window.alert('¡Ya existe un personaje con este ID!');
    }
  }
  

  // FUNCION RANDOM
  function randomHandler() {
    let haveIt = [];
    let random = (Math.random() * 826).toFixed();
  
    random = Number(random);
  
    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setTimeout(() => {
              setCharacters((oldChars) => [...oldChars, data]);
            }, 300);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      console.log("Ya agregaste todos los personajes");
      return false;
    }
  }

  // FUNCION QUE CIERRA LAS CARTAS
  function closeHandler(id) { // Creaamos la funcion cerrar cuando le damos a la x.
    // window.alert('Emulamos que se cierra la card'); // Hacemos una alerta para saber si cerramos la carta
    let deleted = characters.filter(character => character.id !== Number(id))

    setCharacters(deleted);
    dispatch(removeFavorite(id));
  }

  // EFECTO DE ANIMACION DE ANIMACION
  useEffect(() => {
    const spans = document.querySelectorAll('h1 span');
    spans.forEach((span, index) => {
      span.style.setProperty('--delay', `${index * 0.1}s`);
    });
  
    const intervalId = setInterval(() => {
      spans.forEach((span, index) => {
        span.style.setProperty('--delay', `${index * 0.1}s`);
      });
    }, 30 * 1000); // 30 segundos en milisegundos
  
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className='App'>
      {location.pathname !== "/" && (<NavBar onSearch={searchHandler} random={randomHandler} onClick={handleLogout} />)}
      <div className='nameText'>
        <h1>
          {Array.from('RICK AND MORTY').map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h1>
      </div>
      <Routes>
        <Route exact path='/' element={<LandingPage login={login} />}/>
        <Route path='/home' element={<Cards characters={characters} onClose={closeHandler} />} />
        <Route path='detail/:id' element={<Detail />} />
        <Route path='about' element={<About />} />
        <Route path='/favorites' element={<Favorites/>} />
        <Route path='/404' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
