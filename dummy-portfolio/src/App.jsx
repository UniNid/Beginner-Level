import Header from "./Components/Header"
import AboutMe from "./Components/AboutMe"
import Project from "./Components/Project/Project"
import Skill from "./Components/Skill"
import Education from "./Components/Education"
import Hobbies from "./Components/Hobbies"
import Extracurricular from "./Components/Extracurricular"
import Contact from "./Components/Contact"





function App() {
 

  return (
    <div className="bg-slate-100 px-3 py-8">
      <div className=" bg-white max-w-2xl mx-auto rounded-lg shadow-lg">
        <Header />
        <AboutMe/>
        <Project/>
        <Skill/>
        <Education/>
        <Hobbies/>
        <Extracurricular/>
        <Contact/>
      </div>
    </div>
  )
}


export default App
