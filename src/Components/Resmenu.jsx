import React from 'react';
import {useState,useEffect} from 'react';
import {useParams} from "react-router-dom";
import Shimmer from './Shimmer';



const Resmenu=()=>{
const [menu,setMenu]=useState(null)
const {id}=useParams()
console.log(id)

useEffect(()=>{
    fetchData()
},[])

const fetchData=async()=>{

const data=await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.966054&lng=77.634851&restaurantId=${id}`);
const json=await data.json()
setMenu(json)
console.log(json)

};

if (menu===null){
    return <Shimmer/>

}
const {name,costForTwoMessage,cuisines,}=menu?.data?.cards[2]?.card?.card?.info;

const {card}=menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card;

return(
    <>
    <div className="menu">
       <h1>{name}</h1>
       <h2>{costForTwoMessage}</h2>
       <h2>{cuisines}</h2>
       <ul>
        {card.itemCards.map(i=>  <li key={i.card.info.id}>{i.card.info.name}--Rs{i.card.info.defaultPrice/100||i.card.info.price/100}</li>)}

       </ul>
        

    </div>
      
        
        
    </>
    )
}

export default Resmenu;