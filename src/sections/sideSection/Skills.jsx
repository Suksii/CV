import React from "react";
import { IoMdSettings } from "react-icons/io";
import { BiCode } from "react-icons/bi";

const Skills = () => {
  const skills = [
    { icon: <BiCode size={26} />, text: "HTML" },
    { icon: <BiCode size={26} />, text: "CSS" },
    { icon: <BiCode size={26} />, text: "TailwindCSS" },
    { icon: <BiCode size={26} />, text: "SASS" },
    { icon: <BiCode size={26} />, text: "JavaScript" },
    { icon: <BiCode size={26} />, text: "TypeScript" },
    { icon: <BiCode size={26} />, text: "C" },
    { icon: <BiCode size={26} />, text: "React.js" },
    { icon: <BiCode size={26} />, text: "Vue.js" },
    { icon: <BiCode size={26} />, text: "Node.js" },
    { icon: <BiCode size={26} />, text: "Next.js" },
    { icon: <BiCode size={26} />, text: "MySQL" },
    { icon: <BiCode size={26} />, text: "MongoDB" },
    { icon: <BiCode size={26} />, text: "Git" },
  ];

  return (
    <div className="md:py-2">
      <div className="flex gap-2 items-center">
        <IoMdSettings size={30} />
        <h1 className="text-2xl font-semibold py-2">Skills</h1>
      </div>
      <div className="flex md:flex-col justify-evenly flex-row gap-1 pb-2 flex-wrap">
        {skills.map((item, index) => (
          <div key={index} className="flex gap-2 items-center px-2 py-1">
            {item.icon}
            <p className="text-gray-500">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
