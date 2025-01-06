import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NavButton = ({ imgURL, label, route }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route)
  };

  return (
    <button 
      className="flex justify-start items-center gap-2 px-3 py-3 border border-slate-800
                  font-montserrat text-lg max-sm:text-sm max-md:text-base text-nowrap leading-none rounded-xl hover-2"
      onClick={handleClick}
    >
      {label}
      {imgURL && (        
        <img
          src={imgURL}
          alt='arrow right icon'
          className='ml-2 rounded-xl bg-white w-6 h-6'
        />
      )}
    </button>
  );
}

export default NavButton;
