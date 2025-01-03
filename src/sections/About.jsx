import Carousel from "../components/Carousel"

const About = () => {

    return (

        <section id="about" className='slideRight w-full max-container flex gap-10 max-xl:flex-col '>
            <div className='flex flex-col justify-start gap-5 xl:w-3/5'>
                <h1 className='font-palanquin font-bold text-6xl'>
                    About <span className='text-pale-purple'> Penang </span>
                </h1>
                <p className='md:w-2/3 mt-2 font-montserrat text-slate-gray'>
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
