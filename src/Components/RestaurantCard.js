import { CDN_URL } from "../Utils/url";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } =
    props.resData.info;
  return (
    <div className="w-[290px] h-[500px] rounded-lg bg-slate-100 m-4 items-center text-center hover:bg-slate-200">
      <img
        className="rounded-lg h-[290px] w-[290px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="text-lg font-bold">{name}</h3>
      <h4 className="py-1 font-medium">{costForTwo}</h4>
      <h4 className="   text-pretty ">{cuisines.join(",")}</h4>
      <h4 className=" py-1 font-sans font-black">{avgRating} stars</h4>
      <h4 className="py-1 font-bold">
        {props.resData.info.sla.deliveryTime} Minutes
      </h4>
    </div>
  );
};

export default RestaurantCard;
