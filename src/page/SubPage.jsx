import Footer from "../sections/Footer";
import Nav from "../components/Nav";
import SideNav from "../components/SideNav";
import ItemCard from "../components/ItemCard";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollToTop from "../components/ScrollToTop";

// eslint-disable-next-line react/prop-types
const SubPage = ({item = []}) => {
    useEffect(() => {
        gsap.fromTo(
          ".section",
          { opacity: 0, x: -100 }, 
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.2, 
          }
        );
      }, []);
    return (
    <main className='relative'>
        <ScrollToTop/>
        <Nav noLinks={true}/>
        <section className='section padding-x padding-t h-full'>
            <section className='max-container'>
                <div className='flex flex-row max-lg:flex-col gap-10'>
                    <SideNav/>
                    <div className='flex flex-wrap -m-4'>
                        {item.map((data,index) => (
                            <ItemCard 
                                index={index}
                                key={index}
                                title={data.title}
                                rating={data.rating}
                                price = {data.price}
                                description={data.description}
                                address={data.address}
                                image={data.image}/>
                        ))}
                    </div>
                </div>
            </section>
        </section>
        <section className='bg-black padding-x padding-t mt-20 pb-8'>
            <Footer/>
        </section>
    </main>
    );
}

export default SubPage
