import React from 'react';
import {useReactToPrint} from "react-to-print";
import { FaCalendarDays, FaLocationArrow, FaPhone, FaLinkedin, FaGithub, FaPrint } from "react-icons/fa6";
import { IoMdMail, IoMdContact, IoMdSettings, IoMdDownload } from "react-icons/io";
import { BiCode } from "react-icons/bi";

import Suco from "../assets/Suco.jpg";
import Header from "./sideSection/Header.jsx";
import Contact from "./sideSection/Contact.jsx";
import Skills from "./sideSection/Skills.jsx";
const SideInformations = ({printRef}) => {




    return (
            <div className="md:border-r border-r-0 border-b md:border-b-0 border-gray-300 px-3 xl:px-7 md:w-[120rem] xl:w-[50rem]">
                <Header printRef={printRef}/>
                <hr className="mt-4"/>
                <Contact/>
                <hr className="mt-4"/>
                <Skills/>
            </div>

    );
};

export default SideInformations;