import React from 'react';
import { BiSolidUser } from "react-icons/bi";

const AboutSection = () => {
    return (
        <div>
            <div className="flex gap-2 items-center">
                <BiSolidUser size={30} />
                <h1 className="text-2xl font-semibold py-2">About me</h1>
            </div>
            <hr className="w-full"/>
            <p className="text-gray-500 text-lg py-2">I am a highly motivated, enthusiastic and dedicated individual with a strong academic background in Electrical Engineering. I have a passion for web development and I am constantly learning and improving my skills. I am a team player with excellent communication skills and I am always eager to learn and take on new challenges.</p>
            <p className="text-gray-500 text-lg py-2">I am proficient in HTML, CSS, JavaScript, React.js, Node.js, Git and I have experience with SASS and Tailwind. I am also familiar with Next.js, C++, Linux, and Arduino. I am currently working on improving my skills in React.js and Node.js.</p>
        </div>
    );
};

export default AboutSection;