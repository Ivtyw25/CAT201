import { funfact } from "../constants"
import WhyPenangCard from "../components/WhyPenangCard"

const WhyPenang = () => {
  return (
    <section id="whyPenang" className="flex flex-col max-container gap-10">
        <h1 className="text-6xl font-palanquin font-bold"> What so fun about <span className="text-pale-purple">Penang</span> ?</h1>
        <section className='flex justify-center flex-wrap gap-9'>
            {funfact.map((service) => (
                <WhyPenangCard key={service.label} {...service} />
            ))}
        </section>
    </section>

  )
}

export default WhyPenang
