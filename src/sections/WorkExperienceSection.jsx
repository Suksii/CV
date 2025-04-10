import React from "react";
import { MdWork } from "react-icons/md";
const WorkExperienceSection = () => {
  const workExperience = [
    {
      position: "Frontend Developer",
      company: "Freelance",
      date: "Nov 2023 - present",
      description:
        "I work as a Frontend Developer on a freelance basis. I have experience with HTML, CSS, JavaScript, React.js, Vue.js, Node.js, Next.js, SASS and TailwindCSS. I have worked on several projects including personal websites for government and private organizations. I am currently working on improving my skills in React.js and Node.js and I am also learning Next.js.",
    },
    {
      position: "Software Engineer",
      company: "Radio i Televizija Crne Gore, RTCG",
      date: "Aug 2022 - present",
      description: (
        <span>
          As a broadcast engineer at the national television station, I maintain
          complex systems, including Avid's MediaCentral, iNEWS, MediaComposer,
          Maestro, iNEWS Command, and Airspeed, essential for production,
          broadcasting, graphics, editing, archiving, material ingestion, and
          conversion. I also maintain the Yes system for broadcasting and
          recording by SiMedia. Additionally, I support employees in production,
          technical, and news departments, ensuring continuous and efficient
          operation of all processes.
          <br />
          I'm also involved in developing internal web applications for the
          organization, where I've developed strong skills in React, Node.js,
          and Vue.js.",
        </span>
      ),
    },
    {
      position: "Electrical Engineer",
      company: "Ramel",
      date: "Sep 2021 - Jan 2022",
      description:
        "I worked at Ramel, a private company specializing in electrical installations and materials, where I designed high-voltage installations for buildings, households, and hangars. I also interpreted the project for the first section of the highway in Montenegro, creating AutoCAD sketches, extracting project information, and providing suggestions.",
    },
  ];

  return (
    <div>
      <div className="flex gap-2 items-center pb-2">
        <MdWork size={30} />
        <h1 className="text-2xl font-semibold">Work Experience</h1>
      </div>
      <hr className="w-full" />
      {workExperience.map((item, index) => (
        <div key={index} className="flex py-2 flex-col lg:flex-row">
          <p className="text-gray-500 font-semibold" style={{ flex: 1 }}>
            {item.date}
          </p>
          <div className="flex flex-col" style={{ flex: 5 }}>
            <h1 className="text-xl font-semibold">{item.position}</h1>
            <div className={"flex gap-2 items-center"}>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <p className="text-gray-500 text-lg">{item.company}</p>
            </div>
            <p className="text-gray-500 text-[16px] pt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceSection;
