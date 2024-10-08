import { Code } from 'lucide-react';
import Section from './Section';
import GrayPill from './GrayPill';

const Skill=()=>{
    return (
    <>
     <Section  icon={<Code className="w-5" />} title ="Skill">
     <div className='flex flex-wrap gap-2 pt-2'>
          <GrayPill pillTitle="JavaScript"/>
          <GrayPill pillTitle="React"/>
          <GrayPill pillTitle="Node.js"/>
          <GrayPill pillTitle="Python"/>
          <GrayPill pillTitle="SQL"/>
          <GrayPill pillTitle="Git"/>
          <GrayPill pillTitle="AWS"/>
          <GrayPill pillTitle="Docker"/>
    </div>
    </Section>
    </>
    )
    }
    
export default Skill ;