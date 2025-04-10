import React from 'react';
import Suco from "../../assets/Suco.jpg";
import {FaPrint} from "react-icons/fa6";
import {IoMdDownload} from "react-icons/io";
import {useReactToPrint} from "react-to-print";

const Header = ({printRef}) => {


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
        <>
        {/* <div className="rounded-full w-[200px] md:w-[200px] h-[200px] mx-auto overflow-hidden">
            <img src={Suco} alt={Suco} className="object-contain scale-105 hover:scale-110"/>
        </div> */}
            <h1 className="text-4xl font-semibold py-2 text-center">Šućo Ramović</h1>
            <p className="text-gray-500 md:text-lg text-xl lg:text-xl font-semibold text-center">Electrical Engineer</p>
            <p className="text-gray-500 md:text-lg text-xl lg:text-xl font-semibold text-center">Frontend Developer</p>
            <div className="flex flex-col md:flex-row justify-center flex-wrap gap-2 items-center py-2 no-print">
                <button onClick={handlePrint} className="flex items-center justify-center gap-1 bg-gray-700 min-w-[150px] md:w-1/3 text-white px-4 py-2 rounded-full hover:-translate-y-1"><span><FaPrint/></span>Print CV</button>
                <button onClick={downloadCV} className="flex items-center gap-1 justify-center bg-gray-700 min-w-[150px] md:w-1/3 text-white px-4 py-2 rounded-full hover:-translate-y-1"><span><IoMdDownload/></span>Download CV</button>
            </div>
        </>
    );
};

export default Header;