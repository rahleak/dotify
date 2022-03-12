import React from 'react'
import './Footer.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <img className="footer-albumLogo" src="" alt="" />
        <div className="footer-songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>

      <div className="footer-center">
       <ShuffleIcon className="footer-green" />
       <SkipPreviousIcon className="footer-icon" />
       <PlayCircleOutlineIcon fontSize="large" className="footer-icon" />
       <SkipNextIcon className="footer-icon" />
       <RepeatIcon className="footer-green" />
      </div>

      <div className="footer-right"> 
        <Grid container spacing={2}>
          <Grid>
            <PlaylistPlayIcon />
          </Grid>

          <Grid item>
            <VolumeDownIcon />
          </Grid>

          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
