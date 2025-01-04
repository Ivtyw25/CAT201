import { funfact } from "../constants"
import WhyPenangCard from "../components/WhyPenangCard"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"

gsap.registerPlugin(ScrollTrigger)
const WhyPenang = () => {
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
    <section id="whyPenang" ref={sectionRef} className="flex flex-col max-container gap-10">
        <h1 className="text-6xl font-palanquin font-bold"> What so nice of <span className="text-pale-purple">Penang</span> ?</h1>
        <section className='flex justify-center flex-wrap gap-9'>
            {funfact.map((item) => (
                <WhyPenangCard key={item.label} {...item} />
            ))}
        </section>
    </section>

  )
}

export default WhyPenang
