import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";




const Body=()=>{



const [listOfRestaurants, setlistOfRestaurants]= useState([]);
const [filterdResturant,setfilterdResturant]=useState([]);
const [searchText,setsearchText] =useState([]);
useEffect(()=>{
    fetchData();
},[]);

const fetchData=async()=>{
    const data=await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.3730376&lng=74.7071271&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json=await data.json();

    console.log(json);
    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterdResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};




    


    return  listOfRestaurants.length === 0?<Shimmer/>: (
        <div className="body">
            <div className="Filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setsearchText(e.target.value);
                }}/>
                <button onClick={()=>{
                 const filterdResturant=   listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                 setfilterdResturant(filterdResturant);
                }}
                >Search</button>

            </div>
                <button className="filter-btn " onClick={()=>{
                 const  filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.5);
                 setlistOfRestaurants(filteredList);
                }}>Top rated restaurant </button>
            </div>
            <h2>Top resturant chains in Manipal</h2>
            <div className="res-container">
               {filterdResturant.map((restaurant)=>(

               <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> <RestaurantCard  resData={restaurant}/></Link>
               ))}
                
                
            </div>
        </div>
    );
};

export default Body;