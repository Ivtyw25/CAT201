import NavButton from "../components/NavButton"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect,useRef } from "react"
import Line from "../components/Line"
import { topAttractions } from "../constants"
import ActivityCard from "../components/ActivityCard"

gsap.registerPlugin(ScrollTrigger)
const TopAttractions = () => {
    const sectionRef = useRef(null);
    useEffect (() =>{
        const el = sectionRef.current
        gsap.fromTo(
            el,
            { opacity: 0, x: 100 },
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
    <section ref={sectionRef} className="max-container relative w-full flex flex-col">
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold font-palanquin">
                <span className="text-pale-purple"> Top </span> Attractions in Penang
           </h1>
            <div className="justify-between items-center gap-5 flex flex-row">
                <p className="max-md:text-sm flex-1 mt-2 info-text"> You never been to Penang if you don't visit here.</p>
                <NavButton label="See more"/>
            </div>
        </div>
        <div className="grid lg:grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 sm:gap-6 gap-14 mt-8">
            {topAttractions.map((item, index) => (
                <ActivityCard 
                    key={index}
                    title={item.title}
                    category={item.category}
                    rating={item.rating}
                    location={item.location}
                    imgURL={item.imgURL}
                    price={item.price}/>
            ))}
        </div>
        <Line/>
    </section>
  )
}

export default TopAttractions
