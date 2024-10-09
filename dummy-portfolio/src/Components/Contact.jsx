import { Globe } from 'lucide-react';
import Section from './Section';
import Link from "./Link"
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';

const social=[{hrf: "https://in.linkedin.com/", icon:<Linkedin className="w-5"/>, title:"LinkedIn"},
              {hrf: "https://github.com/", icon:<Github className="w-5"/> ,title:"GitHub"},
              {hrf: "https://x.com/", icon:<Twitter className="w-5"/>, title:"Twitter"}      
];

const Contact=()=>{
    return (
    <>
     <Section  icon={<Globe className="w-5" />} title ="Contact & Social Media">
          <div>Email:uniyalNidhi2111@gmail.com</div>
          <div>Phone:(123) 456-7890</div>
          <div className="pt-2 pb-10">
            {social.map(item=><Link key={item.title} goto={item.hrf} icon={item.icon} iconTitle={item.title}/>)}
        </div>
    </Section>
    </>
    )
    }
    
    export default Contact ;