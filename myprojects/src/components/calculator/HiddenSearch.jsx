import React, { useState } from 'react'

function HiddenSearch() {
    const [inputVisblie,setInputVisible] = useState(false)

    function clickHandler(visbleValue) {
        setInputVisible(true)
    }
  return (
    <>
    {inputVisblie ?(<input type='text' placeholder='enter key word'/>):  (<button type='button' onClick={()=> clickHandler(true)}>search</button> )
} 
    </>
  )
}

export default HiddenSearch
