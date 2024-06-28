import React from 'react';
import Header from "./sideSection/Header.jsx";
import Contact from "./sideSection/Contact.jsx";
import Skills from "./sideSection/Skills.jsx";
const SideInformations = ({printRef}) => {




    return (
            <div className="md:border-r border-r-0 border-b md:border-b-0 border-gray-300 px-3 xl:px-7 md:w-[120rem] xl:w-[50rem]">
                <Header printRef={printRef}/>
                <hr className="mt-2"/>
                <Contact/>
                <hr className="mt-2"/>
                <Skills/>
            </div>

    );
};

export default SideInformations;