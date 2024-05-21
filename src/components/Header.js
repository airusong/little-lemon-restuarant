// src/Header.js
import React, { useEffect, useRef } from "react";
import logo from '../assets/Logo.svg'; // Adjust the path if needed
import Nav from './Nav';
import { Image, Box, HStack } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import './styles.css'; 
const Header = () => {
    return (
        <div className="header-container">
        <div className="image-section">
            <img src={logo} alt="Little Lemon Logo" className="logo" /> 
        </div> 
        <div className="nav-section">
        <HStack spacing={8}>
                <Link to="/" className="nav-item">Homepage</Link>
                <Link to="/menu" className="nav-item">Menupage</Link>
                <Link to="/reserve" className="nav-item">Reservation</Link>
        </HStack>
        </div>
        </div>
        

    );
};

export default Header;

