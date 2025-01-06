import { hamburger } from "../assets/icons";
import { homeLogo } from "../assets/icons";

// eslint-disable-next-line react/prop-types
const Nav = ({navLinks = []}) => {
  return (
    <header className='py-4 padding-x z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={homeLogo}
            alt='logo'
            width={75}
            height={75}
            className="m-0 z-0"
        />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label} className="">
              <a
                href={item?.href}
                className='font-montserrat leading-normal text-lg -slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
