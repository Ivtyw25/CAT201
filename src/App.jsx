import Nav from './components/Nav'
import Hero from './sections/Hero'
import About  from './sections/About'

const App = () => {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <About/>
      </section>
    </main>
  )
}

export default App
