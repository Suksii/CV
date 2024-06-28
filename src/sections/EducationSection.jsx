import React from 'react';
import { FaGraduationCap } from "react-icons/fa6";

const EducationSection = () => {

    const education = [
        {
            degree: "Bachelor of Science in Electrical Engineering",
            school: "University of Montenegro, Faculty of Electrical Engineering",
            date: "2015 - 2020",
            description: "I graduated with a Bachelor of Science in Electrical Engineering from the University of Montenegro, Faculty of Electrical Engineering. I completed a four-year program with a focus on electrical power systems."
        },
        {
            degree: "High School Diploma",
            school: "Gymnasium 'Slobodan Škerović'",
            date: "2011 - 2015",
            description: "I graduated from Gymnasium 'Slobodan Škerović' in Podgorica, Montenegro. I completed a four-year program with a focus on natural sciences."
        }
    ]

    return (
        <div>
            <div className="flex gap-2 items-center pb-2">
                <FaGraduationCap size={30} />
                <h1 className="text-2xl font-semibold">Education</h1>
            </div>
            <hr className="w-full"/>
            {education.map((item, index) => (
                <div key={index} className="flex py-2 flex-col lg:flex-row">
                    <p className="text-gray-500 font-semibold" style={{flex: 1}}>{item.date}</p>
                    <div className="flex flex-col" style={{flex: 5}}>
                        <h1 className="text-xl font-semibold">{item.degree}</h1>
                        <div className={"flex gap-2 items-center"}>
                            <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                            <p className="text-gray-500 text-lg">{item.school}</p>
                        </div>
                        {/*<p className="text-gray-500 text-lg pt-2">{item.description}</p>*/}
                    </div>

                </div>
            ))}
        </div>
    );
};

export default EducationSection;