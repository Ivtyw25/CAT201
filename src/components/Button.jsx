/* eslint-disable react/prop-types */
const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
    fullWidth,
  }) => {
    return (
      <button
        className={`flex justify-start items-center gap-2 px-7 py-4 border 
                    font-montserrat text-lg leading-none hover
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-pale-light-yellow text-slate-gray font-medium border-pale-light-yellow"
        } rounded-xl ${fullWidth && "w-full"}`}
      >
        {label}
  
        {iconURL && (
          <img
            src={iconURL}
            alt='arrow right icon'
            className='ml-2 rounded-full bg-white w-5 h-5'
          />
        )}
      </button>
    );
  };
  
  export default Button;
  