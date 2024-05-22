import React from "react";
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
const NameCard = ({ description, imageSrc }) => {
    return (
        <VStack
        spacing={10}
        padding={4}
        backgroundColor="#EDEFEE"
        borderRadius="md"
        boxShadow="md"
        align="center"
        >
        <Image src={imageSrc}  width="100%" height="50%" />
        <Text color="black">{description}</Text>
        </VStack>
    )
}
export default NameCard;