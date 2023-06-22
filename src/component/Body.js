import React, { useState ,useEffect} from 'react'
import { RESTURANTMENUURL } from '../Config';
import ResturantCard from './ResturantCard';
import Shimmer from "./Shimmer"
import "./body.css"
import { Link } from 'react-router-dom';
function Body() {
    // const [searchtext,setSearchtext]=useState("")
    const [allRestaurants, setAllRestaurants] = useState([]);
    // const [filterdrestaurants, setFilteredRestaurants] = useState([]); 
    useEffect(() => {
      getResturant();
    }, []);

    async function getResturant() {
      const data = await fetch(RESTURANTMENUURL , {mode:'cors'});
      const res = await data.json();

      setAllRestaurants(res.data?.cards[2]?.data?.data?.cards);
          console.log("allres", res.data);

    //   setFilteredRestaurants(res.data?.cards[2]?.data?.data?.cards);
    }
     return (
       <div id="resturant_body">
         {allRestaurants.length === 0
           ? <Shimmer/>
           : allRestaurants.map((res) => {
               return (
                <Link to={"/restaurant/" + res.data.id} key={res.data.id} style={{ textDecoration: "none" }}>
                    <ResturantCard key={res.data.id} {...res.data} />
                </Link>
               )
             })}
       </div>
     );
}

export default Body