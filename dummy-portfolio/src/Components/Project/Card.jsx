import BluePill from "./BluePill";

const Card=({name, desc, techUsed})=>{
    return(
      <div className="rounded-md  shadow-lg m-2 p-4 text-gray-700 bg-slate-100 mb-5">
        <span className="font-bold text-lg">{name}</span>
        <p className="text-gray-500 pt-1">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-3">
            {techUsed.map(lang=><BluePill key={lang} pillTitile={lang}/>)}
        </div>
      </div>
    );
  }
  
  export default Card;