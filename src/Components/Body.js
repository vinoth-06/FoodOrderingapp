import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0713635&lng=80.1873225&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setRestaurantList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>NO Internet Connection</h1>;

  if (restaurantList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="flex">
        <div className=" flex content-center">
          <input
            type="text"
            className="border-solid border-2 w-[250px] h-12 mt-4 mr-4 ml-[650px] mb-4 rounded-md "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className=" border-solid border-2 h-12 rounded-lg w-20 mt-4 hover:bg-slate-800 hover:text-white"
            onClick={() => {
              const searchedRestaurant = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(searchedRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="border-solid border-2 h-12 rounded-lg w-80 ml-4 mt-4 hover:bg-slate-800 hover:text-white"
          onClick={() => {
            const filteredResList = restaurantList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setRestaurantList(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap items-center content-center ml-36  ">
        {filteredRestaurant.map((restaurant) => (
          <Link to={"/restaurant/" + restaurant.info.id}>
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
