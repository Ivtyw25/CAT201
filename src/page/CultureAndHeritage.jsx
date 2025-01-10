import Nav from "../components/Nav";
import SideNav from "../components/SideNav";
import ItemCard from "../components/ItemCard";
import Footer from "../sections/Footer";
import { CultureandHeritage } from ".";

const CultureAndHeritage = () => {
    return (
    <main className='relative'>
        <Nav noLinks={true}/>
        <section className='padding-x padding-t'>
            <section className='max-container'>
                <div className='flex flex-row max-lg:flex-col gap-10'>
                    <SideNav/>
                    <div className='flex flex-col gap-10'>
                        {CultureandHeritage.map((data,index) => (
                            <ItemCard 
                                index={index}
                                key={index}
                                title={data.title}
                                rating={data.rating}
                                description={data.description}
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

export default CultureAndHeritage
