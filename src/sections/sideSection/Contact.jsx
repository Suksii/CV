import React from 'react';
import {IoMdContact, IoMdMail} from "react-icons/io";
import {FaCalendarDays, FaGithub, FaLinkedin, FaLocationArrow, FaPhone} from "react-icons/fa6";

const Contact = () => {

    const info = [
        {icon: <FaCalendarDays size={22}/>, text: "27.07.1996"},
        {icon: <FaLocationArrow size={22}/>, text: "Podgorica, Montenegro"},
        {icon: <FaPhone size={22}/>, text: "+382 69 741 999"},
        {icon: <IoMdMail size={22}/>, text: "ramovic225@gmail.com", link: "mailto:ramovic225@gmail.com"},
        {icon: <FaLinkedin size={22}/>, link: "https://www.linkedin.com/in/%C5%A1u%C4%87o-ramovi%C4%87-58a728256/", text: "LinkedIn" },
        {icon: <FaGithub size={22}/>, link: "https://github.com/Suksii", text: "GitHub"},
    ]

    return (
        <div className="md:py-4">
            <div className="flex gap-2 items-center">
                <IoMdContact size={30} />
                <h1 className="text-2xl font-semibold py-2">Contact</h1>
            </div>
            <div className="flex justify-between flex-wrap flex-row md:flex-col gap-2">
                {info.map((item, index) => (
                    <div key={index} className="flex py-1.5 gap-2 items-center break-all">
                        {item.icon}
                        {item.link ? <a href={item.link} target="_blank" rel="noreferrer" className="text-blue-500">{item.text}</a> : <p className="text-gray-500">{item.text}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;