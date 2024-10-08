const Link=({goto, icon, iconTitle})=>{
    return <a href={goto}><div className="flex gap-1 text-blue-500 text-sm">
        <span >{icon}</span> 
        <span>{iconTitle}</span>
    </div>
    </a>
}

export default Link;