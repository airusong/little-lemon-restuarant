import NameCard from "./NameCard";
import React from "react";
import { Box, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
const reviews = [
    {
      description:
      "I'd be lost without Little Lemon. Your company is truly upstanding and is behind its product 100%.",
      getImageSrc: () => require("../assets/andree-z.jpeg"),
    },
    {
      description:
      "Little Lemon is the most valuable business resource we have EVER purchased.",
      getImageSrc: () => require("../assets/walsh-e.png"),
    },
    {
      description:
      "Really good. Little Lemon was the best investment I ever made. It's just amazing.",
      getImageSrc: () => require("../assets/gigi-y.png"),
    },
    {
       description:
       "The service was excellent. Little Lemon has got everything I need. Absolutely wonderful!",
        getImageSrc: () => require("../assets/ansel-p.png"),
      },
  ];
const customerSection = () => {
    return(
        <FullScreenSection
        isDarkBackground
        backgroundColor="#495E57"
        py={16}
        spacing={8}
        >

        <Heading as="h1" id="customer-section" margin={50}>
            Our Customers Says...
        </Heading>
        <Box
        display="grid"
        gridTemplateColumns="repeat(4,minmax(0,1fr))"
        gridGap={15}
        margin={50}
        >
            {reviews.map((review)=>(
                <NameCard
                key={review.description}
                description={review.description}
                imageSrc={review.getImageSrc()}
                />
            ))}
        </Box>
        </FullScreenSection>
    )
}
export default customerSection;