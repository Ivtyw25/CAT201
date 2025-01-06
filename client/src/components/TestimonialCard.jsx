import { star } from "../assets/icons";

// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='h-4/6 flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='mt-6 max-w-sm text-wrap text-center info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <img
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0'
        />
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <h3 className='mt-2 font-palanquin text-xl text-center font-bold'>
        {customerName}
      </h3>
    </div>
  );
};

export default TestimonialCard;
