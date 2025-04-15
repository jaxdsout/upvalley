import { useNavigate } from "react-router"
import Logo from "../components/Logo";
import Burger from "../components/Burger";

export default function Navbar ({ handleNavCover }) {
    const navigate = useNavigate();

    return (
        <div className="sticky top-0 w-full bg-[#EEC584] flex items-center justify-center py-4 drop-shadow-lg" style={{ zIndex: 4 }}>
            <div onClick={() => navigate('/')}>
                <Logo /> 
            </div>
            <div className="absolute right-8 cursor-pointer" onClick={handleNavCover}>
                <Burger />
            </div>
        </div>

    )
}