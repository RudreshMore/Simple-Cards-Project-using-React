import React from 'react'


const Card = ({user,para,image,link,video}) => {
    const handleClick = () => {
    window.open(link, 'none'); // ✅ Opens Wikipedia in a new tab
   
  };
  return (
    
    <div className='card'>
        <img src={image} alt="" />
        <h2>{user}</h2>
        <p>{para}</p>
      <a href={link}>
        <button type="button">Click here to Explore More</button>
      </a>
      
      
    </div>
   
  )
  
  
}

export default Card
