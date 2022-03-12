import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from './DataLayer'

export default function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header-left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, "
          type="text"
        />
      </div>

      <div className="header-right">
        <Avatar src={user?.images[0]?.url}  />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}
