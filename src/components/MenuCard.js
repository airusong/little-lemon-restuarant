import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
const MenuCard = ({ title, description, imageSrc }) => {
    return (
        <VStack
        spacing={4}
        padding={4}
        backgroundColor="white"
        borderRadius="md"
        boxShadow="md"
        align="left"
        >
        <Image src={imageSrc} alt={title} />
        <Heading as="h3" size="md" color="black">{title}</Heading>
        <Text color="black">{description}</Text>
        </VStack>
    )
}
export default MenuCard;