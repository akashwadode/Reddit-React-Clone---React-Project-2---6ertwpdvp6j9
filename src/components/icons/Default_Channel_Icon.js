import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedditAlien } from "@fortawesome/free-brands-svg-icons";
const Default_Channel_Icon = () => {
  return (
    <div  className="channel-icon channel-image">
    <FontAwesomeIcon
      icon={faRedditAlien} 
    />
  </div>
  )
}

export default Default_Channel_Icon