import React from 'react'
import './SidebarOption.css'

const SidebarOption = ({ active, text, Icon }) => {
  return (
    //The active color does not work for now
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon />
        <h2> {text} </h2>
    </div>
  )
}

export default SidebarOption
