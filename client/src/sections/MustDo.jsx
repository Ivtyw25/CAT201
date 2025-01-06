import NavButton from "../components/NavButton"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect,useRef } from "react"
import Line from "../components/Line"
import { mustDo } from "../constants"
import ActivityCard from "../components/ActivityCard"

gsap.registerPlugin(ScrollTrigger)
const MustDo = () => {
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
    <section ref={sectionRef} className="max-container relative w-full flex flex-col">
        <div className="flex flex-col">
            <h1 className="text-3xl font-bold font-palanquin">
                Top-15 <span className="text-pale-purple"> Must Do </span> Experience in Penang
           </h1>
            <div className="justify-between items-center gap-5 flex flex-row">
                <p className="max-md:text-sm flex-1 mt-2 info-text"> Let's create alot of unforgettable memories.</p>
                <NavButton label="See more"/>
            </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-2 sm:gap-6 gap-14 mt-8">
            {mustDo.map((item, index) => (
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

export default MustDo
