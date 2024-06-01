import React from 'react';
import { MdWork } from 'react-icons/md';
const WorkExperienceSection = () => {

    const workExperience = [
        {
            position: "Frontend Developer",
            company: "Freelance",
            date: "Nov 2023 - present",
            description: "I work as a Frontend Developer on a freelance basis. I have experience with HTML, CSS, JavaScript, React.js, Node.js, Git, SASS and Tailwind. I have worked on several projects including personal websites for government and private organizations. I am currently working on improving my skills in React.js and Node.js and I am also learning Next.js."
        },
        {
            position: "Software Engineer",
            company: "Radio i Televizija Crne Gore, RTCG",
            date: "Aug 2022 - present",
            description: "As a broadcast engineer at the national television station, I am responsible for maintaining complex systems, including Avid, which encompasses MediaCentral, iNEWS, MediaComposer, Maestro, iNEWS Command, and Airspeed. These systems are crucial for production, broadcasting, graphics, editing, archiving, material ingestion, and conversion. Additionally, I maintain the Yes system for broadcasting and recording, developed by the Italian company SiMedia. Beyond technical maintenance, I provide support to employees in production, technical, and news departments, ensuring the continuous and efficient operation of all our processes."
        },
        {
            position: "Electrical Engineer",
            company: "Ramel",
            date: "Sep 2021 - Jan 2022",
            description: "I worked at Ramel, a private company specializing in electrical installations and materials, where I was responsible for designing high-voltage installations for buildings, households, and hangars. Additionally, I was tasked with interpreting the project for the first section of the highway in Montenegro, which involved drafting sketches of highway sections in AutoCAD, extracting information from the project, and providing suggestions."
        }
    ]

    return (
        <div>
            <div className="flex gap-2 items-center">
                <MdWork size={30} />
                <h1 className="text-2xl font-semibold py-2">Work Experience</h1>
            </div>
            <hr className="w-full"/>
            {workExperience.map((item, index) => (
                <div key={index} className="flex py-4 flex-col lg:flex-row">
                    <p className="text-gray-500 font-semibold" style={{flex: 1}}>{item.date}</p>
                    <div className="flex flex-col" style={{flex: 5}}>
                        <h1 className="text-xl font-semibold">{item.position}</h1>
                        <div className={"flex gap-2 items-center"}>
                            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                            <p className="text-gray-500 text-lg">{item.company}</p>
                        </div>
                        <p className="text-gray-500 text-lg pt-2">{item.description}</p>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default WorkExperienceSection;