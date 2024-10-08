
const Card=({cardTitle, children})=>{
    return(
      <div className="rounded-lg  shadow-lg m-2 p-4 text-gray-700">
        <span className="font-bold">{cardTitle}</span>
        <p>{children}</p>
      </div>
    );
  }
  
  export default Card;