import React from "react";
import logo from '../assets/Logo.svg';
import { Box,Stack, HStack, VStack } from '@chakra-ui/react'
const Footer=(props)=>{
    return(
        <footer className="footer-section" >
            <HStack spacing={8}>
            <Box margin={50}>
                <img src={logo} alt="logo"/>
            </Box>
            <Box margin={50}>
                <Stack spacing={4}>
                    <h3>Contacts</h3>
                    <p>1234 Reed Ave Chicago, IL</p>
                    <p>123-456-7890</p>
                </Stack>
            </Box>
            <Box margin={50}>
                <Stack spacing={4}>
                    <h3>Hours</h3>
                    <p>Mon - Fri: 9AM - 5PM</p>
                    <p>Sat - Sun: 10AM - 4PM</p>
                </Stack>
            </Box>
            </HStack>
        </footer>
    );
}
export default Footer;