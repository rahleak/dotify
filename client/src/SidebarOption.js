import React from 'react'
import './SidebarOption.css'

export default function SidebarOption({ title, Icon }) {
  console.log("this is a title", title);
  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption-icon"/>}
     {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  )
}
