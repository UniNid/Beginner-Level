const Section=({ icon, title, children})=>{
    return (
    <div className="px-5 pt-6 mb-4"> 
        <div className="flex items-center font-extrabold gap-1 pb-2 text-xl">
           <span >{icon}</span>
           <span className="text-xl">{title}</span>
        </div>  
        <div className="text-gray-600 text-sm">
           {children} 
        </div> 
       
    </div>
    )
    }
    
    export default Section ;