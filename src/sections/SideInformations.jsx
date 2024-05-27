import React from 'react';
import FeatherIcon from 'feather-icons-react';
const SideInformations = () => {

    const info = [
        {icon: "calendar", text: "27.07.1996"},
        {icon: "map-pin", text: "Podgorica, Montenegro"},
        {icon: "mail", text: "ramovic225@gmail.com"},
        {icon: "phone", text: "+382 69 741 999"},
        {icon: "linkedin", text: "linkedin.com/in/sucoramovic"},
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

    return (
            <div className="border-r border-gray-400 pr-8">
                <div className="bg-blue-500 w-full h-[150px] rounded-full">
                </div>
                <h1 className="text-4xl font-semibold py-4">Šućo Ramović</h1>
                <p className="text-gray-500 text-xl font-semibold">Electrical Engineer</p>
                <p className="text-gray-500 text-xl font-semibold">Frontend Developer</p>
                <hr className="my-4"/>
                <h1 className="text-2xl font-semibold py-2">Contact</h1>
                    {info.map((item, index) => (
                        <div key={index} className="flex py-1.5 gap-2 items-center">
                            <FeatherIcon icon={item.icon} size={20} />
                            <p className="text-gray-500">{item.text}</p>
                        </div>
                    ))}
                    <h1 className="text-2xl font-semibold py-2">Skills</h1>
                {skills.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center px-2 py-1">
                        <FeatherIcon icon={item.icon} size={20} />
                        <p className="text-gray-500">{item.text}</p>
                    </div>
                ))}
            </div>

    );
};

export default SideInformations;