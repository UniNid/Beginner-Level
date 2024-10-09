import { Briefcase } from 'lucide-react';
import Section from '../Section';
import Card from "./Card";



const projects=[
    {name:"E-commerce Platform", desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, animi!", techUsed:["React", "Node.js","MongoDB", "Stripe"]},
    {name:"Social Media Dashboard", desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, animi!", techUsed:["Vue.js","D3.js", "Express", "PostgreSQL"]}
]

const Project=()=>{
    return (
     <Section  icon={<Briefcase className="w-5"/>} title ="Projects">
        {projects.map(project=><Card name={project.name} desc={project.desc} techUsed={project.techUsed}/>)}
    </Section>
    )
    }
    
    export default Project;