import React, { useState } from 'react'
import './accordions.css'

function Accordions({title,content}) {
  
  const [isActive,setIsActive] = useState(false)

  return (
   <section className="accordion-card" key={Math.random()}>
    <div className="header" onClick={() =>setIsActive(!isActive)} >
      <h3>{title}</h3>
      <p className="icon">{isActive ? '-' : '+'}</p>
    </div>
  <div className="content">
    {isActive && <p className='card-info' > {content}</p>}
  </div>
   </section>
  )
}

export default Accordions