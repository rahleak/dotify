import React, { useEffect, useState } from 'react';
import { getTokenFromUrl } from './dotify';
import Login from './Login';
import './App.css';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";

const dotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null); // null is initial value for token

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl(); // got the token from the URL
    window.location.hash = ""; // we stripped it 
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      dotify.setAccessToken(_token);

      dotify.getMe().then(user => {
        console.log('🥰', user);
      });
    }

    console.log("i have a token 🤩", token)
  }, []); //run once with empty brackets. want to run based on whatever variable changes add that in brackets

  return (
    <div className="app">
      {
        token ? <Player /> :  <Login />
      }
    </div>
  );
}

export default App;
