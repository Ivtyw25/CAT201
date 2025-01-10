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
        <section id="about" ref={sectionRef} className='slideRight w-full max-container flex gap-10 max-xl:flex-col '>
            <div className='flex flex-col justify-start gap-5 xl:w-3/5'>
                <h1 className='font-palanquin font-bold text-6xl'>
                    About <span className='text-pale-purple'> Penang </span>
                </h1>
                <p className='md:w-2/3 mt-2 text-base font-montserrat leading-8 text-slate-gray'>
                    Penang, often called the "Pearl of the Orient," has a rich history as a key trading hub in Southeast Asia. Established as a British settlement in 1786 by Captain Francis Light, it became a melting pot of cultures, drawing immigrants from China, India, and beyond. Under British colonial rule, Penang thrived as part of the Straits Settlements, playing a vital role in regional commerce. During World War II, it endured Japanese occupation before becoming part of independent Malaysia in 1957. Today, Penang is celebrated for its multicultural heritage, historic architecture, and status as a UNESCO World Heritage Site.
                </p>
            </div>
            <Carousel/>
        </section>
    )
}

export default About
