import { logo_url } from "../utils/contants";

const RestaurantCard=(props)=>{
    const {resData}=props;
   
    return(
        
        <div className="res-card" style={{backgroundColor:" #f0f0f0"}}>
            <img className="res-logo" alt="res-logo"
             src={
             logo_url + resData.info.cloudinaryImageId 
             }

             /> 
                <h3 style={{margin:"5px"}}>{resData.info.name}</h3>
                <h4 style={{margin:"3px"}}>{resData.info.cuisines.join(",")} </h4>
                <h4 style={{margin:"3px"}}>{resData.info.avgRating}</h4>
                <h4 style={{margin:"3px"}}>{resData.info.costForTwo}</h4>
                <h4 style={{margin:"0px"}}>{resData.info.sla.deliveryTime}minutes</h4>
              
            
        </div>
    );
};
export default RestaurantCard;