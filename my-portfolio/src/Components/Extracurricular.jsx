import { Award } from 'lucide-react';
import Section from './Section';
import List from './List';

const items=["Volunteer at local coding bootcamp for underprivileged youth", "Organizer of city-wide hackathon event", "Member of the University Chess Club"];

const Extracurricular=()=>{
    return (
    <>
     <Section  icon={<Award className="w-5" />} title ="Extracurricular Activities">
      <List list={items}/>
    </Section>
    </>
    )
    }
    
    export default Extracurricular;