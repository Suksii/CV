import './App.css'
import SideInformations from "./sections/SideInformations.jsx";
import AboutSection from "./sections/AboutSection.jsx";
import WorkExperienceSection from "./sections/WorkExperienceSection.jsx";

function App() {

  return (
      <div className="w-[80%] mx-auto">
          <div className="flex gap-2 py-4 px-8 shadow rounded-2xl">
              <SideInformations />
              <div>
                  <AboutSection />
                  <WorkExperienceSection />
              </div>
          </div>
      </div>

  )
}

export default App
