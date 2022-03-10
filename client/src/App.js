import React, { useEffect, useState } from 'react';
import { getTokenFromUrl } from './dotify';
import Login from './Login';
import './App.css';
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from './DataLayer'

const dotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();  //pulling from the data layer. disptach shoots it right in the data layer

  //Run code based on a given condition
  useEffect(() => {
    const hash = getTokenFromUrl(); // got the token from the URL
    window.location.hash = ""; // we stripped it 
    const _token = hash.access_token;

    if (_token) {
      
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      
      
      dotify.setAccessToken(_token);

      dotify.getMe().then(user => {
      
      dispatch({
        type: 'SET_USER',
        user: user
        });
      });

      dotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists
        })
      })
    }

    console.log("i have a token 🤩", token)
  }, []); //run once with empty brackets. want to run based on whatever variable changes add that in brackets

  return (
    <div className="app">
      {
        token ? <Player dotify={dotify}/> :  <Login />
      }
    </div>
  );
}

export default App;
