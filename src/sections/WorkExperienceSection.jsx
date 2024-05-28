import React from 'react';
import FeatherIcon from 'feather-icons-react';

const WorkExperienceSection = () => {

    const workExperience = [
        {
            position: "Frontend Developer",
            company: "Freelance",
            date: "Nov 2023 - present",
            description: "I worked as an Electrical Engineer at Elektroprivreda Crne Gore. My responsibilities included maintenance of electrical equipment, testing and commissioning of new equipment, fault finding and repair of electrical equipment, preparation of technical documentation and reports, and coordination with other departments."
        },
        {
            position: "Software Engineer",
            company: "Radio i Televizija Crne Gore, RTCG",
            date: "Aug 2022 - present",
            description: "I work as a Frontend Developer on a freelance basis. I have experience with HTML, CSS, JavaScript, React.js, Node.js, Git, SASS and Tailwind. I have worked on several projects including personal websites, e-commerce websites and web applications. I am currently working on improving my skills in React.js and Node.js and I am also learning TypeScript."
        },
        {
            position: "Electrical Engineer",
            company: "Ramel",
            date: "Sep 2021 - Jan 2022",
            description: "I work as a Software Engineer at a company. My responsibilities include developing and maintaining software applications, writing clean and efficient code, testing and debugging code, collaborating with other team members, and contributing to the overall success of the projects."
        }
    ]

    return (
        <div>
            <div className="flex gap-2 items-center">
                <FeatherIcon icon={"briefcase"} size={30} />
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