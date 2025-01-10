import Footer from '../sections/Footer';
import ItemCard from '../components/ItemCard';
import SideNav from '../components/SideNav';
import Nav from '../components/Nav';
import { accomodation } from '.';

const Accommodations = () => {

    return (
        <main className='relative'>
        <Nav noLinks={true}/>
        <section className='padding-x padding-t'>
            <section className='max-container'>
                <div className='flex flex-row max-lg:flex-col gap-10'>
                    <SideNav/>
                    <div className='grid grid-cols-1 gap-10'>
                        {accomodation.map((data,index) => (
                            <ItemCard 
                                index={index}
                                key={index}
                                title={data.title}
                                rating={data.rating}
                                price={data.price}
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

export default Accommodations
