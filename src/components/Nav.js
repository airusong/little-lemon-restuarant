import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import Menupage from "./Menupage";
import Reservation from "./Reservation";
import { Box, HStack } from "@chakra-ui/react";
const Nav = () => {
    return (
        <div>
        <nav>
        <HStack spacing={8}>
                <Link to="/" className="nav-item">Homepage</Link>
                <Link to="/menu" className="nav-item">Menupage</Link>
                <Link to="/reserve" className="nav-item">Reservation</Link>
        </HStack>
        </nav>

        </div>
    )
}
export default Nav;
//<Routes> 
//<Route path="/" element={<Homepage />}></Route>
//<Route path="/menu" element={<Menupage />}></Route>
//<Route path="/reserve" element={<Reservation />}></Route>
//</Routes>