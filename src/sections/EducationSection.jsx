import React from 'react';
import FeatherIcon from "feather-icons-react";

const EducationSection = () => {

    const education = [
        {
            degree: "Bachelor of Science in Electrical Engineering",
            school: "University of Montenegro, Faculty of Electrical Engineering",
            date: "2015 - 2020",
            description: "I graduated with a Bachelor of Science in Electrical Engineering from the University of Montenegro, Faculty of Electrical Engineering. I completed a five-year program with a focus on electrical power systems. My final thesis was on the topic of 'Optimal Sizing of Energy Storage Systems in Microgrids'."
        },
        {
            degree: "High School Diploma",
            school: "Gymnasium 'Slobodan Škerović'",
            date: "2011 - 2015",
            description: "I completed my high school education at the Technical School of Electrical Engineering in Podgorica. I graduated with a focus on electrical engineering and automation. During my high school education, I gained a solid foundation in mathematics, physics, electrical engineering, and automation."
        }
    ]

    return (
        <div>
            <div className="flex gap-2 items-center">
                <FeatherIcon icon={"book"} size={30} />
                <h1 className="text-2xl font-semibold py-2">Education</h1>
            </div>
            <hr className="w-full"/>
            {education.map((item, index) => (
                <div key={index} className="flex py-4 flex-col lg:flex-row">
                    <p className="text-gray-500 font-semibold" style={{flex: 1}}>{item.date}</p>
                    <div className="flex flex-col" style={{flex: 5}}>
                        <h1 className="text-xl font-semibold">{item.degree}</h1>
                        <div className={"flex gap-2 items-center"}>
                            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                            <p className="text-gray-500 text-lg">{item.school}</p>
                        </div>
                        <p className="text-gray-500 text-lg pt-2">{item.description}</p>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default EducationSection;