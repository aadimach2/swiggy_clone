import React from "react";

const Rest=(props)=>{
const {resInfo}=props;

const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
}=resInfo?.info

    return(
        <>
        <div className="card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="" />
            <h3>{name}</h3>
            <p>Cuisines:{cuisines.join(',')}</p>
            <p>Average Rating:{avgRating}</p>
            <p>Cost for two:{costForTwo}</p>
            <p>Delivery time:{sla.deliveryTime}</p>



        </div>
     
        
        
        </>
    )
}
export default Rest; 