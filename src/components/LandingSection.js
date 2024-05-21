import React from "react";
import { Image,Avatar, HStack, Heading, VStack ,Box} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import logo from '../assets/restauranfood.jpg'; 
import './LandingSection.css';

const Title = "Little Lemon";
const name = "Chicago";
const description1 = "We are a family owned"
const description2= "Mediterranean restaurant,"
const description3=" focused on traditional"
const description4="recipes served with a modern twist"

const LandingSection = () => {
    return (
       <div className="restaurant-container">
         <div className="text-section">
            <h1>{Title}</h1>
            <h2>{name}</h2>
            <p>{description1}</p>
            <p>{description2}</p>
            <p>{description3}</p>
            <p>{description4}</p>
            <button>Order Now</button>
         </div>
         <div className="image-section">
            <img src={logo} alt="restaurant" />
         </div>
       </div>
    )
};
  
  export default LandingSection;