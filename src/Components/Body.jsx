import React,{useEffect,useState} from 'react';
import Shimmer from '../Components/Shimmer'
import Rest from '../Components/Rest';
import { Link } from 'react-router-dom';
const Body=()=>{

const [info,setInfo]=useState([])    
const [filter,setFilter]=useState([])
const [text,setText]=useState("")



useEffect(()=>{
fetchData();

}, []);



const fetchData=async()=>{
  const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.966054&lng=77.634851&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  const json=await data.json()
  console.log(json)

setInfo(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

 setFilter(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}

if (info.length===0){
  return <Shimmer/>


}


    return (
  <>

    <div className="container1">
          <div className="container2">
              <input
              placeholder="restaurants"
              type="text"
              value={text}
              onChange={(e)=>
                setText(e.target.value)}
              
              />
              <button onClick={()=>{
               
                console.log(text);
                const fil2=info.filter((i)=>
                  i.info.name.toLowerCase().startsWith(text.toLowerCase())
                );
                setFilter(fil2)
                console.log(fil2);
              }}
              >
                Search
              </button>

              
          </div>
     

      <div className="container3">
            <button 

              onClick={()=>{
              const fil1=info.filter((i)=>parseFloat(i.info.avgRating)>4.5
              )
              setFilter(fil1)
              console.log(fil1);
              }}

              >
              Top Rated Restaurant
              </button>
      </div>
      </div>
        <div className="list">

          
          {filter.map((i)=>(
            <Link 
            key={i.info.id}
            to={"/restaurant/"+i.info.id}
            >
            
            <Rest key={i.info.id}resInfo={i}/>
            </Link>

       

          ))}
       
        </div>     


  </>
    )
    
}

export default Body;