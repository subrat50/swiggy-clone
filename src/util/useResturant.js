import { useState } from "react";
import { useEffect } from "react";
// import { FETCH_MENU_URL} from "../Config.js"
import { FETCH_MENU_URL } from "../Config";
const useRestaurant = (resid) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getResturant();
  }, []);

  async function getResturant() {
    const data = await fetch(FETCH_MENU_URL + resid);
    const res = await data.json();
    console.log("subrat", res.data);
    setRestaurant(res.data);
  }
  return restaurant;
};

export default useRestaurant;