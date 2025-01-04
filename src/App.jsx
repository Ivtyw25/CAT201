import Nav from './components/Nav'
import Hero from './sections/Hero'
import About  from './sections/About'
import WhyPenang from './sections/WhyPenang'
import Testimonials from './sections/Testimonials'
import Footer from './sections/Footer'
import NavigationButtons from './sections/NavigationButton'

const App = () => {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding-x padding-t'>
        <About/>
      </section>
      <section className='padding-x padding-t'>
        <NavigationButtons/>
      </section>
      <section className='padding'>
        <WhyPenang/>
      </section>
      <section className='bg-pale-light-yellow padding'>
        <Testimonials/>
      </section>
      <section className='bg-black padding-x padding-t mt-20 pb-8'>
        <Footer/>
      </section>
    </main>
  )
}

export default App
