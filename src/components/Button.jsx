const Button = ({
    label,
    iconURL,
    backgroundColor,
    textColor,
    borderColor,
  }) => {
    return (
      <button
        className={`flex justify-center items-center gap-2 px-3 py-3 border font-montserrat text-xs leading-none
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
        } rounded-full hover`}
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
  