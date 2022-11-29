import React from "react";
import "./Landingpage.css";
import { Box } from "@mui/system";
import Header from "./Header";
import Homepage from "./Homepage";
import BasicModal from "./chatModal";//chat support component
import About from "./About";
import Featured from "./Featured";
import Contact from "./Contact";


const Landingpage = () => {
    return(
        <Box className="landingpage">
            <div  className="modals">
                <BasicModal />
            </div>
            <Header />
            <Homepage />
            <About />
            <Featured />
            <Contact />
        </Box>
    )
}

export default Landingpage;