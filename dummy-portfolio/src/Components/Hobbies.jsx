import { Heart } from 'lucide-react';
import Section from './Section';
import List from './List';

const hobbies=["Photography", "Hiking", "Playing Guitar", "Reading sci-fi novels"];

const Hobbies=()=>{
    return (
    <>
     <Section  icon={<Heart className="w-5" />} title ="Hobbies & Interests">
      <List list={hobbies}/>
    </Section>
    </>
    )
    }
    
    export default Hobbies ;