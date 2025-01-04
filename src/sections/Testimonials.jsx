import TestimonialCard from "../components/TestimonialCard"
import { Testimonial } from "../constants"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger)
const Testimonials = () => {
  const sectionRef = useRef(null);
  useEffect (() =>{
      const el = sectionRef.current
      gsap.fromTo(
          el,
          { opacity: 0, y:100 },
          {
            opacity: 1,
            y: 0,
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
    <section id="testimonial" ref={sectionRef} className="max-container">
        <h3 className='font-palanquin text-center text-3xl font-bold'>
            Listen to what other
            <span className='text-pale-purple'> Tourist </span>
                thought about 
            <span className="text-pale-purple"> Penang </span>?
        </h3>
        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {Testimonial.map((review, index) => (
          <TestimonialCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default Testimonials
