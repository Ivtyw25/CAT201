// eslint-disable-next-line react/prop-types
const ItemCard = ({title, description, rating, price, image, index, address}) => {
  return (
    <div className="flex flex-col sm:flex-row shadow-2xl cursor-pointer hover:scale-105 transform transition-all duration-300 rounded-xl">
      <div className="min-w-64 min-h-64 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover shadow-xl"
        />
      </div>
      <div className="ml-0 sm:ml-8 mt-4 sm:mt-0 flex flex-col p-4 gap-2">
        <p className="font-bold font-montserrat text-lg">{index + 1}. {title}</p>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="font-semibold text-lg">{rating} ⭐</p>
        {address && (<p className="text-sm text-slate-gray"> {address}</p>)}
        <p className="font-medium text-lg text-green-600">{price}</p>
      </div>
    </div>
  )
}

export default ItemCard
