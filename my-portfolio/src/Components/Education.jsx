import { BookOpen } from 'lucide-react';
import Section from './Section';

const Education=()=>{
    return (
    <>
     <Section  icon={<BookOpen className="w-5" />} title ="Education">
          <div className='pb-3 pt-2'>
            <h3 className='font-bold text-sm'>Bachelor of Technology in Computer Engeneering</h3>
            <p className='text-gray-600 text-sm'>G.B.Pant University of Agriculture and Technology, 2022-25</p>
          </div>
          <div>
            <h3 className='font-bold text-sm'>Full Stack Web Development Bootcamp</h3>
            <p className='text-gray-600 text-sm'>Complete Coding, 2024</p>
          </div>
    </Section>
    </>
    )
    }
    
    export default Education ;