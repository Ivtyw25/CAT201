import { hamburger } from "../assets/icons";
import { homeLogo } from "../assets/icons";
import { navLinks } from "../constants";
import Button from "./Button";

const Nav = () => {
  return (
    <header className='py-4 padding-x z-10 w-full absolute'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={homeLogo}
            alt='logo'
            width={170}
            height={170}
            className="m-0"
        />
        </a>
        <div className='lg:ml-8 max-lg:mr-10 p-1 border border-slate-gray rounded-full gap-4 w-[265px] items-center flex'>
            <input type='text' placeholder='search anything of Penang' className='input' />
            <div className='flex justify-end items-center'>
                <Button label='Search'/>
            </div>
        </div>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
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
