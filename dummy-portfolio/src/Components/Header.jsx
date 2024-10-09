import profilePic from "../assets/pic.jpg"

const Header=()=>{
return(
<header className="bg-blue-600 text-white rounded-t-lg p-5 flex justify-between items-center">
    <div>
    <div className="font-bold text-xl">Nidhi Uniyal</div>
    <div>Full Stack Developer</div>
    </div>
    <img className="rounded-full w-14" src={profilePic} alt="profile pic" />
</header> 
)
}

export default Header ;