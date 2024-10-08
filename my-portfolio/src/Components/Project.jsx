import { Briefcase } from 'lucide-react';
import Section from './Section';
import Card from "./Card";
import BluePill from "./BluePill";

const Project=()=>{
    return (
    <>
     <Section  icon={<Briefcase className="w-5"/>} title ="Projects">
        <Card cardTitle="E-commerce Platform">
            <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, animi!</p>
            <div className="flex flex-wrap gap-2 mt-3">
            <BluePill pillTitile="React"/>
            <BluePill pillTitile="Node.js"/>
            <BluePill pillTitile="MongoDB"/>
            <BluePill pillTitile="Stripe"/>
        </div>
        </Card>
        <Card cardTitle="Social Media Dashboard ">
            <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, animi!</p>
            <div className="flex flex-wrap gap-2 mt-3">
            <BluePill pillTitile="Vue.js"/>
            <BluePill pillTitile="D3.js"/>
            <BluePill pillTitile="Express"/>
            <BluePill pillTitile="PostgreSQL"/>
        </div>
        </Card>
    </Section>
    </>
    )
    }
    
    export default Project;