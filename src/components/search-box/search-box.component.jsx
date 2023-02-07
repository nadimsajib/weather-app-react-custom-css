import React from 'react'

const SearchBox = ({ handleUnitsClick , enterKeyPressed }) => {
  return (
    <div>
        <div className="section section__inputs">
            <input 
            onKeyDown={enterKeyPressed}
            type="text" 
            name="city" 
            placeholder="Enter City.."/>
            <button onClick={(e) => handleUnitsClick(e)}>°F</button>
        </div>
    </div>
  )
}

export default SearchBox