import React from "react";
import ReactDOM from "react-dom/client" ;
const Header = () => {
  return (
    <div className="header" >
      <div className="logo-container">
        <img  className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyKVKpsURZoH_g_OR2nVt-OqulxMxD2Z_8sg&s" alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({resName,cuisines,rating}) => {
 // const {resName,cuisines,rating} = props;
  return(
    <div className="res-card">
      <div>
        <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/esbfzuzb9kxubpk8ella" alt="restaurant-logo" />
        <h3>{resName}</h3>
        <h4>{cuisines}</h4>
        <h4>{rating} stars</h4>
        <h4>30 mins</h4>  
      </div>
    </div>
  );
};



const Body = () => {
   return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard 
        resName="Meghana food" 
        cuisines="South Indian, North Indian"
        rating="4.5"/>
        <RestaurantCard 
        resName="KFC"
        cuisines="Fast food ,Chicken legs"
        rating="3.8"/>
      </div>
    </div>

   );
};
const AppLayout = () => {
  return(
  <div className="app">
    <Header />
    <Body />
  </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);