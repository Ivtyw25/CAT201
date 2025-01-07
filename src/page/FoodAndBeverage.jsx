import SideNav from '../components/SideNav';
import Nav from '../components/Nav';
import ItemCard from '../components/ItemCard';
import Footer from '../sections/Footer';
import { FandB } from '.';

const FoodAndBeverage = () => {

    return (
        <main className='relative'>
            <Nav/>
            <section className='padding-x padding-t'>
                <section className='max-container'>
                    <div className='flex flex-row max-lg:flex-col gap-10'>
                        <SideNav/>
                        <div className='flex flex-col gap-10'>
                            {FandB.map((data,index) => (
                                <ItemCard 
                                    index={index}
                                    key={index}
                                    title={data.title}
                                    rating={data.rating}
                                    description={data.description}
                                    price={data.price}
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
};

export default FoodAndBeverage;
