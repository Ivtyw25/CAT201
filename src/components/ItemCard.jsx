import { star } from "../assets/icons"
// eslint-disable-next-line react/prop-types
const ItemCard = ({title, description, rating, price, image, index, address}) => {
  return (
    <div className="p-4 sm:w-1/2 lg:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img 
            className="lg:h-72 max-lg:h-48 w-full object-cover object-center"
            src={image} />
        <div className="p-6 cursor-pointer hover:bg-indigo-700 h-full hover:text-white transition duration-300 ease-in">
          <h2 className="text-xl font-medium mb-2">{index + 1}. {title}</h2>
          <h1 className="text-base font-semibold mb-3">{address}</h1>
          <div className="flex mt-3 flex-row items-center gap-2.5">
              <img
                  src={star}
                  width={16}
                  height={16}
                  alt='rating star'
                  className='object-contain m-0'
              />
            <p className=""> {rating} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
