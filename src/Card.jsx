import React from 'react';
import "./index.css"

function Card(prop)
{
  return <>
     <div className="card">
            <img src={prop.imgsrc} height="400px" width="300px" alt="Pic" className="crad_img" ></img>
        <div className="card_info">

     <span className="card_catgory">A Netflix Orignal Series</span>
     <h3 className="card_title">{prop.title}</h3>
    <a href={prop.asrc}>
      <button>Watch Now</button>
    </a>
   </div>
  </div>
</>
}

export default Card;