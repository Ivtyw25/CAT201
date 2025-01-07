import Footer from "../sections/Footer";
import Nav from "../components/Nav";
import SideNav from "../components/SideNav";
import ItemCard from "../components/ItemCard";
import { beaches } from ".";

const Beaches = () => {
    return (
    <main className='relative'>
        <Nav/>
        <section className='padding-x padding-t'>
            <section className='max-container'>
                <div className='flex flex-row max-lg:flex-col gap-10'>
                    <SideNav/>
                    <div className='grid grid-cols-1 gap-10'>
                        {beaches.map((data,index) => (
                            <ItemCard 
                                index={index}
                                key={index}
                                title={data.title}
                                rating={data.rating}
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

export default Beaches