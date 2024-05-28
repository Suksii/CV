import React from 'react';
import FeatherIcon from 'feather-icons-react';
import {useReactToPrint} from "react-to-print";
const SideInformations = ({printRef}) => {

    const info = [
        {icon: "calendar", text: "27.07.1996"},
        {icon: "map-pin", text: "Podgorica, Montenegro"},
        {icon: "mail", text: "ramovic225@gmail.com"},
        {icon: "phone", text: "+382 69 741 999"},
        {icon: "linkedin", text: "https://www.linkedin.com/in/%C5%A1u%C4%87o-ramovi%C4%87-58a728256/"},
        {icon: "github", text: "https://github.com/Suksiii"},
    ]

    const skills = [
        {icon: "code", text: "HTML"},
        {icon: "code", text: "CSS"},
        {icon: "code", text: "Tailwind"},
        {icon: "code", text: "SASS"},
        {icon: "code", text: "JavaScript"},
        {icon: "code", text: "React.js"},
        {icon: "code", text: "Node.js"},
        {icon: "code", text: "Git"},
    ]

    const handlePrint = useReactToPrint({
        content: () => printRef.current,
    });

    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf';
        link.download = 'CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
            <div className="md:border-r border-b border-gray-300 mx-4 px-1 xl:px-7 md:w-[200px] xl:w-[50rem]">
                <div className="bg-blue-500 w-full h-[150px] rounded-full">
                </div>
                <h1 className="text-4xl font-semibold py-4">Šućo Ramović</h1>
                <p className="text-gray-500 md:text-lg text-xl lg:text-xl font-semibold">Electrical Engineer</p>
                <p className="text-gray-500 md:text-lg text-xl lg:text-xl font-semibold">Frontend Developer</p>
                <div className="flex justify-between flex-wrap gap-2 items-center">
                    <button onClick={handlePrint} className="bg-gray-700 min-w-[150px] md:w-1/3 text-white px-4 py-2 rounded-full hover:-translate-y-1">Print CV</button>
                    <button onClick={downloadCV} className="bg-gray-700 min-w-[150px] md:w-1/3 text-white px-4 py-2 rounded-full hover:-translate-y-1">Download CV</button>
                </div>
                <hr className="mt-4"/>
                <div className="md:py-4">
                    <div className="flex gap-2 items-center">
                        <FeatherIcon icon={"info"} size={20} />
                        <h1 className="text-2xl font-semibold py-2">Contact</h1>
                    </div>
                    <div className="flex justify-between flex-wrap flex-row md:flex-col gap-2">
                        {info.map((item, index) => (
                            <div key={index} className="flex py-1.5 gap-2 items-center break-all">
                                <FeatherIcon icon={item.icon} size={20} />
                                <p className="text-gray-500">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:py-4">
                    <div className="flex gap-2 items-center">
                        <FeatherIcon icon={"settings"} size={20} />
                        <h1 className="text-2xl font-semibold py-2">Skills</h1>
                    </div>
                    <div className="flex md:flex-col justify-evenly flex-row gap-2 pb-2 flex-wrap">
                        {skills.map((item, index) => (
                            <div key={index} className="flex gap-2 items-center px-2 py-1">
                                <FeatherIcon icon={item.icon} size={20} />
                                <p className="text-gray-500">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

    );
};

export default SideInformations;