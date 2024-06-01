import React from 'react';
import {useReactToPrint} from "react-to-print";
import { FaCalendarDays, FaLocationArrow, FaPhone, FaLinkedin, FaGithub, FaPrint } from "react-icons/fa6";
import { IoMdMail, IoMdContact, IoMdSettings, IoMdDownload } from "react-icons/io";
import { BiCode } from "react-icons/bi";

import Suco from "../assets/Suco.jpg";
const SideInformations = ({printRef}) => {

    const info = [
        {icon: <FaCalendarDays size={22}/>, text: "27.07.1996"},
        {icon: <FaLocationArrow size={22}/>, text: "Podgorica, Montenegro"},
        {icon: <IoMdMail size={22}/>, text: "ramovic225@gmail.com"},
        {icon: <FaPhone size={22}/>, text: "+382 69 741 999"},
        {icon: <FaLinkedin size={22}/>, text: "https://www.linkedin.com/in/%C5%A1u%C4%87o-ramovi%C4%87-58a728256/"},
        {icon: <FaGithub size={22}/>, text: "https://github.com/Suksiii"},
    ]

    const skills = [
        {icon: <BiCode size={26}/>, text: "HTML"},
        {icon: <BiCode size={26}/>, text: "CSS"},
        {icon: <BiCode size={26}/>, text: "Tailwind"},
        {icon: <BiCode size={26}/>, text: "SASS"},
        {icon: <BiCode size={26}/>, text: "JavaScript"},
        {icon: <BiCode size={26}/>, text: "C"},
        {icon: <BiCode size={26}/>, text: "React.js"},
        {icon: <BiCode size={26}/>, text: "Node.js"},
        {icon: <BiCode size={26}/>, text: "MySQL"},
        {icon: <BiCode size={26}/>, text: "Git"},
    ]

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

    const downloadCV = () => {
        const url = 'http://localhost:5173/CV.pdf';
        const fileName = url.split('/').pop();
        fetch(url)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            })
            .catch(error => console.error("Error downloading the file: ", error));
    }

    return (
            <div className="md:border-r border-r-0 border-b md:border-b-0 border-gray-300 px-3 xl:px-7 md:w-[100rem] xl:w-[50rem]">
                <div className="rounded-full w-[220px] md:w-full h-[220px] mx-auto overflow-hidden">
                    <img src={Suco} alt={Suco} className="object-contain scale-105"/>
                </div>
                <h1 className="text-4xl font-semibold py-4">Šućo Ramović</h1>
                <p className="text-gray-500 md:text-lg text-xl lg:text-xl font-semibold">Electrical Engineer</p>
                <p className="text-gray-500 md:text-lg text-xl lg:text-xl font-semibold">Frontend Developer</p>
                <div className="flex flex-col md:flex-row justify-center flex-wrap gap-2 items-center py-2">
                    <button onClick={handlePrint} className="flex items-center justify-center gap-1 bg-gray-700 min-w-[150px] md:w-1/3 text-white px-4 py-2 rounded-full hover:-translate-y-1"><span><FaPrint/></span>Print CV</button>
                    <button onClick={downloadCV} className="flex items-center gap-1 justify-center bg-gray-700 min-w-[150px] md:w-1/3 text-white px-4 py-2 rounded-full hover:-translate-y-1"><span><IoMdDownload/></span>Download CV</button>
                </div>
                <hr className="mt-4"/>
                <div className="md:py-4">
                    <div className="flex gap-2 items-center">
                        <IoMdContact size={30} />
                        <h1 className="text-2xl font-semibold py-2">Contact</h1>
                    </div>
                    <div className="flex justify-between flex-wrap flex-row md:flex-col gap-2">
                        {info.map((item, index) => (
                            <div key={index} className="flex py-1.5 gap-2 items-center break-all">
                                {item.icon}
                                <p className="text-gray-500">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:py-4">
                    <div className="flex gap-2 items-center">
                        <IoMdSettings size={30} />
                        <h1 className="text-2xl font-semibold py-2">Skills</h1>
                    </div>
                    <div className="flex md:flex-col justify-evenly flex-row gap-2 pb-2 flex-wrap">
                        {skills.map((item, index) => (
                            <div key={index} className="flex gap-2 items-center px-2 py-1">
                                {item.icon}
                                <p className="text-gray-500">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

    );
};

export default SideInformations;