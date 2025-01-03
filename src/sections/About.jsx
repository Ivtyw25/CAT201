import Carousel from "../components/Carousel"

const About = () => {
  return (
    <section id="about" className='w-full max-container flex gap-10 max-xl:flex-col '>
        <div className='flex flex-col justify-start gap-5 '>
            <h2 className='text-4xl font-palanquin font-bold'>
                About <span className='text-coral-red'> Penang </span>
            </h2>
            <p className='md:w-5/6 mt-2 font-montserrat text-slate-gray'>
                Discover Penang, the "Pearl of the Orient," where rich history, diverse cultures, and breathtaking landscapes come together 
                to offer a unique experience. Located on Malaysia's 
                northwest coast, Penang is renowned for its vibrant city life, stunning beaches, lush hills, and mouthwatering food.
            </p>
        </div>
        <Carousel/>
    </section>
  )
}

export default About
