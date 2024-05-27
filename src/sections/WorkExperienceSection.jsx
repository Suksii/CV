import React from 'react';

const WorkExperienceSection = () => {

    const workExperience = [
        {
            position: "Electrical Engineer",
            company: "Elektroprivreda Crne Gore",
            date: "2019 - 2021",
            description: "I worked as an Electrical Engineer at Elektroprivreda Crne Gore. My responsibilities included maintenance of electrical equipment, testing and commissioning of new equipment, fault finding and repair of electrical equipment, preparation of technical documentation and reports, and coordination with other departments."
        },
        {
            position: "Frontend Developer",
            company: "Freelance",
            date: "2021 - Present",
            description: "I work as a Frontend Developer on a freelance basis. I have experience with HTML, CSS, JavaScript, React.js, Node.js, Git, SASS and Tailwind. I have worked on several projects including personal websites, e-commerce websites and web applications. I am currently working on improving my skills in React.js and Node.js and I am also learning TypeScript."
        }
    ]

    return (
        <div>
            <div className="flex gap-2 items-center">
                <h1 className="text-2xl font-semibold py-2">Work Experience</h1>
            </div>
            <hr className="w-full"/>
            {workExperience.map((item, index) => (
                <div key={index} className="py-2">
                    <h1 className="text-xl font-semibold">{item.position}</h1>
                    <p className="text-gray-500 text-lg">{item.company}</p>
                    <p className="text-gray-500 text-lg">{item.date}</p>
                    <p className="text-gray-500 text-lg py-2">{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default WorkExperienceSection;