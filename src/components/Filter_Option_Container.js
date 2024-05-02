import React, { useEffect, useState } from 'react'

import './..//styles/filter_option-container.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameSimple, faRankingStar, faShuttleSpace, faSnowflake } from '@fortawesome/free-solid-svg-icons'

const Filter_Option_Container = ({changeActiveFilterOption}) => {
    const [activeOption,setActiveOption] = useState("Best");
    useEffect(()=>{
        changeActiveFilterOption(activeOption);
    },[activeOption]);
  return (
    <section className='filter option container'>
        <div className={activeOption=== "Best" ? "active" : "inactive"} onClick={()=> setActiveOption("Best")}>
            <FontAwesomeIcon icon={faShuttleSpace} className='icon rocket'/>
            <p>Best</p>
        </div>
        <div className={activeOption=== "Hot" ? "active" : "inactive"} onClick={()=> setActiveOption("Hot")}>
            <FontAwesomeIcon icon={faFireFlameSimple} className='icon'/>
            <p>Hot</p>
        </div>
        <div className={activeOption=== "New" ? "active" : "inactive"} onClick={()=> setActiveOption("New")}>
            <FontAwesomeIcon icon={faSnowflake} className='icon'/>
            <p>New</p>
        </div>
        <div className={activeOption=== "Top" ? "active" : "inactive"} onClick={()=> setActiveOption("Top")}>
            <FontAwesomeIcon icon={faRankingStar} className='icon'/>
            <p>Top</p>
        </div>
    </section>
  )
}

export default Filter_Option_Container