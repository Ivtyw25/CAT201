import { navButtons } from "../constants"
import { useNavigate } from "react-router-dom";
import NavButton from "./NavButton";
const SideNav = () => {
    const navigate = useNavigate();
    
    const handleClick = (route) => {
        navigate(route)
    };
  return (
    <div>
        <div className="min-w-56 max-lg:hidden flex flex-col gap-10">
            <h3 className="font-bold text-lg font-montserrat">Other Things To do</h3>
            <div className="flex flex-col mt-8 gap-5 text-lg text-slate-gray font-palanquin">
            {navButtons.map((item, index) => (
                <p
                    key={index}
                    className="cursor-pointer hover:text-black"
                    onClick={() => handleClick(item.route)}
                >
                    {item.label}
                </p>
            ))}
            </div>
        </div>
        <h3 className="lg:hidden mb-2 font-bold text-lg font-montserrat">Other Things To do</h3>
        <div className="lg:hidden grid grid-cols-2 gap-5 w-full">
            {/* Left Column */}
            <div className="flex flex-col gap-5">
                {navButtons.slice(0, 4).map((item, index) => (
                    <NavButton key={index} label={item.label} imgURL={null} route={item.route} />
                ))}
            </div>
            {/* Right Column */}
            <div className="flex flex-col gap-5">
                {navButtons.slice(4, 8).map((item, index) => (
                    <NavButton key={index} label={item.label} imgURL={null} route={item.route} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default SideNav
