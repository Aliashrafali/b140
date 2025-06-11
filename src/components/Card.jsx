import React, { useState } from "react";
import './Styles/main.css'
import CardArray from "./CardArray";

const Card = () =>{

    const[card] = useState(CardArray)

    return(
        <>
           <div className="whole-card">
            {
                card.map((item) =>{
                    return(
                        <div className="card">
                            <div className="image">
                                <img src={item.image} alt={item.image} height={'120px'} width={'120px'}></img>
                                <p>{item.name}</p>
                                <div className="designation">
                                    {item.designation}
                                </div>
                                <p style={{textAlign:'center', letterSpacing:'0px', fontSize:'15px', color:'#DDDDDD'}}>
                                    {item.institute}
                                </p>
                            </div>
                        </div>
                    )
                })
            }
           </div>
        </>
    )
}

export default Card