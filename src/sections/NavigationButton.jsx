import gsap from "gsap"
import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
import { navButtons } from "../constants";
import NavButton from "../components/NavButton";
import Line from "../components/Line";

gsap.registerPlugin(ScrollTrigger);

const NavigationButtons= () => {
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
        <section ref={sectionRef} id="navigation" className="max-container w-full flex flex-col">
            <div className="flex flex-col">
                <h1 className="text-3xl font-bold font-palanquin">
                    Explore <span className="text-pale-purple"> Popular </span> Experience
                </h1>
                <div className="justify-between items-center gap-5 flex flex-row">
                    <p className="max-md:text-sm flex-1 mt-2 info-text">See what other travelers enjoy the most in Penang</p>
                    <NavButton route={"/FoodandBeverage"} label="See all"/>
                </div>
            </div>
            <div className="mt-10 max-w-screen-lg">
                {/* Laptop view: Maintain the original layout */}
                <div className="hidden sm:flex flex-wrap gap-10">
                    {navButtons.map((item, index) => (
                        <NavButton key={index} route={item.route} label={item.label} imgURL={item.imgURL} />
                    ))}
                </div>

                {/* Mobile view: Create a different layout */}
                <div className="grid sm:hidden grid-cols-2 gap-5">
                    <div className="flex flex-col gap-5">
                        {navButtons.slice(0, 4).map((item, index) => (
                            <NavButton key={index} route={item.route} label={item.label} imgURL={null} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-5">
                        {navButtons.slice(4, 8).map((item, index) => (
                            <NavButton key={index} route={item.route} label={item.label} imgURL={null} />
                        ))}
                    </div>
                </div>
            </div>
            <Line/>
        </section>
    )
}

export default NavigationButtons
