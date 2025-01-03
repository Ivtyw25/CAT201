import TestimonialCard from "../components/TestimonialCard"
import { Testimonial } from "../constants"
const Testimonials = () => {
  return (
    <section id="testimonial" className="max-container">
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
