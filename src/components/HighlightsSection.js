import { Box, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import MenuCard from "./MenuCard";
const menus = [
    {
      title: "Greek Salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      getImageSrc: () => require("../assets/greek salad.jpg"),
    },
    {
      title: "Bruschetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      getImageSrc: () => require("../assets/bruschetta.jpeg"),
    },
    {
      title: "Lemon Dessert",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      getImageSrc: () => require("../assets/lemon dessert.jpg"),
    },
  ];

const HighlightsSection=()=>{
    return (
        <div className="highlights-container">
            <Heading as="h1" id="projects-section">
            This weeks specials
            </Heading>
            <Box
            display="grid"
            gridTemplateColumns="repeat(3,minmax(0,1fr))"
            gridGap={8}
            >
           {menus.map((menu) => (
            <MenuCard
            key={menu.title}
            title={menu.title}
            description={menu.description}
            imageSrc={menu.getImageSrc()}
            />
            ))}
            </Box>    
        </div>
    )
}
export default HighlightsSection;