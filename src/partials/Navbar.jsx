import { useNavigate } from "react-router"
import Logo from "../components/Logo";
import Burger from "../components/Burger";

export default function Navbar ({ handleNavCover }) {
    const navigate = useNavigate();

    return (
        <div className="fixed top-0 w-full bg-[#ebc694] flex items-center justify-start sm:justify-center py-4 drop-shadow-lg inner-shadow pointer-events-auto" style={{ zIndex: 4 }}>
            <div onClick={() => navigate('/')} className="ml-4 sm:ml-0">
                <Logo /> 
            </div>
            <div className="absolute right-8 cursor-pointer active:translate-y-1" onClick={handleNavCover}>
                <Burger />
            </div>
        </div>

    )
}