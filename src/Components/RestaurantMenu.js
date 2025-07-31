import  { useEffect, useState } from 'react'
import { MENU_URL } from '../Utils/url'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'

const RestaurantMenu = () => {
  const [resInfo,setResInfo] = useState(null)
  const {resId} = useParams()
  console.log(resId);
  useEffect(()=>{
    fetchMenu()
  },[])

  const fetchMenu = async()=>{
    const data = await fetch(MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER")

    const json = await data.json()

    setResInfo(json.data);

  }

  if(resInfo=== null) return <Shimmer/>

  const {name,cuisines,costForTwoMessage,avgRating,totalRatingsString,id} =resInfo?.cards[2]?.card?.card?.info
  console.log(id);
  
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card
  console.log(itemCards);
  

  return (
    <div className=' res-menu'>
      <h1>{name}</h1>
    <h3>{cuisines.join(" , ")}</h3>
    <h3>{costForTwoMessage}</h3>
    <h3>{avgRating}</h3>
    <h3>{totalRatingsString}</h3>
    <ul>
      {itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
    </ul></div>
  )
}

export default RestaurantMenu