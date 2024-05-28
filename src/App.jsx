import './App.css'
import SideInformations from "./sections/SideInformations.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import WorkExperienceSection from "./sections/WorkExperienceSection.jsx";
import EducationSection from "./sections/EducationSection.jsx";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {

    const printRef = useRef();



    return (
      <div className="px-4 xl:px-[10rem] py-4 bg-gray-200">
          <div className="flex flex-col md:flex-row gap-2 py-4 shadow-xl rounded-2xl bg-gray-100" ref={printRef}>
              <SideInformations printRef={printRef}/>
              <div className="px-3 xl:px-5 py-4">
                  <AboutSection />
                  <WorkExperienceSection />
                  <EducationSection />
              </div>
          </div>
      </div>
    )
}

export default App
