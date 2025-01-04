import Carousel from "../components/Carousel"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
const About = () => {
    const sectionRef = useRef(null);
    useEffect (() =>{
        const el = sectionRef.current
        gsap.fromTo(
            el,
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              x: 0,
              duration: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                end: 'top 30%',
                scrub: 1,
                markers: false
              }
            }
          );
    },[])
    return (
        <section id="about" ref={sectionRef} className='slideRight h-full w-full max-container flex gap-10 max-xl:flex-col '>
            <div className='flex flex-col justify-start gap-5 xl:w-3/5'>
                <h1 className='font-palanquin font-bold text-6xl'>
                    About <span className='text-pale-purple'> Penang </span>
                </h1>
                <p className='md:w-2/3 mt-2 text-lg font-montserrat leading-8 text-slate-gray'>
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
