import { star } from "../assets/icons"
// eslint-disable-next-line react/prop-types
const ActivityCard = ({title, rating, location, imgURL, category, price}) => {
  return (
    <div className="gap-3 flex flex-1 flex-col max-sm:max-w-[350px] px-2 py-3 rounded-xl shadow-3xl cursor-pointer hover-card">
        <img src={imgURL} className="rounded-xl object-contain"/>
        <h1 className="mt-5 font-palanquin text-xl leading-normal font-bold"> {title} </h1>
        <div className="flex mt-3 flex-row gap-2.5">
            <img
                src={star}
                width={16}
                height={16}
                alt='rating star'
                className='object-contain m-0'
            />
            <p className="info-text"> {rating} </p>
        </div>
        <p className="info-text"> {category} <br/> {location}</p>
        <p className="info-text">from <br/> <span className="font-bold font-palanquin text-black">RM{price}</span></p>
    </div> 
  )
}

export default ActivityCard
