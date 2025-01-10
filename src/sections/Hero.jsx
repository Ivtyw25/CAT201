/* eslint-disable react/prop-types */
import { statistics } from "../constants";
import { useEffect } from 'react';
import { gsap } from 'gsap';
import Button from "../components/Button";
import { rightArrow } from "../assets/icons";
import { LandingVideo } from "../assets/videos";

const Hero = () => {



  useEffect(() => {
    gsap.fromTo(
      ".text",
      { opacity: 0, x: -100 }, 
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2, 
      }
    );

    gsap.fromTo(
      ".video", 
      { opacity: 0, scale: 0.8 }, 
      {
        opacity: 1,
        scale: 1, 
        duration: 1.5, 
        ease: "power2.out", 
      }
    )
  }, []);

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col min-h-screen gap-10 max-container'
    >
        <div className='z-10 relative xl:w-3/5 flex flex-col max-xl:justify-center items-start w-full max-xl:padding-x pt-16'>
            <p className='text text-xl font-semibold font-montserrat text-pale-purple'>
              Explore the beauty of Penang, Malaysia
            </p>
            <h1 className='text mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className='text xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
              A Paradise
            </span>
            <br />
            <span className='text text-pale-purple inline-block mt-3'>Penang</span> Awaits
            </h1>
            <p className='text font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
              Discover the vibrant culture, stunning beaches, and delicious cuisine that make Penang, Malaysia, a must-visit destination.
            </p>
            <div className='text flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
              {statistics.map((stat, index) => (
              <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
          </div>
        </div>
        <div className="video relative xl:mt-24 padding-x 
              justify-center xl:flex-col xl:justify-start xl:min-h-screen max-xl:py-8 bg-primary">
          <video src={LandingVideo} controls preload="auto" className="xl:w-[460px] xl:h-[45%] max-xl:w-full max-xl:max-h-72 xl:pb-28 pb-20" />
          <Button label="Explore more" iconURL={rightArrow}/>
        </div>
    </section>
  )
}

export default Hero
