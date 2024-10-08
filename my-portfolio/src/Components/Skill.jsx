import { Code } from 'lucide-react';
import Section from './Section';
import GrayPill from './GrayPill';

const titles=["JavaScript","React", "Node.js", "Python", "SQL", "Git", "AWS", "Docker"]

const Skill=()=>{
    return (
    <>
     <Section  icon={<Code className="w-5" />} title ="Skill">
     <div className='flex flex-wrap gap-2 pt-2'>   
        {titles.map((item)=><GrayPill key={item} pillTitle={item}/>)}
    </div>
    </Section>
    </>
    )
    }
    
export default Skill ;