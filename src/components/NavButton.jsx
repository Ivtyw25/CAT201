// eslint-disable-next-line react/prop-types
const NavButton = ({imgURL, label}) => {
  return (
    <button className="flex justify-start items-center gap-2 px-3 py-3 border border-slate-800
                    font-montserrat text-lg leading-none rounded-xl hover-2">
        {label}
        {imgURL && (        
          <img
            src={imgURL}
            alt='arrow right icon'
            className='ml-2 rounded-xl bg-white w-6 h-6'
          />)}
    </button>
  )
}

export default NavButton
