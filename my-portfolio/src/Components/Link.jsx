const Link=({goto, icon, iconTitle})=>{
    return <a className="flex gap-1 text-blue-500 text-sm hover:text-blue-900"  href={goto} target="_blank">
        <span >{icon}</span> 
        <span>{iconTitle}</span>
    </a>
}

export default Link;