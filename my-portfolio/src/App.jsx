import Header from "./Components/Header"
import AboutMe from "./Components/AboutMe"
import Project from "./Components/Project"
import Skill from "./Components/Skill"
import Education from "./Components/Education"
import Hobbies from "./Components/Hobbies"
import Extracurricular from "./Components/Extracurricular"
import Contact from "./Components/Contact"
import Link from "./Components/Link"
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';



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
        <div className="px-5 pb-10">
            <Link goto="google.com" icon={<Linkedin className="w-5"/>} iconTitle="LinkedIn"/>
            <Link goto="github.com" icon={<Github className="w-5"/>} iconTitle="GitHub"/>
            <Link goto="twitter.com" icon={<Twitter className="w-5"/>} iconTitle="GitHub"/>
        </div>
   
       
      </div>
    </div>
  )
}


export default App
