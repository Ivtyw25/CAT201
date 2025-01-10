import Footer from "../sections/Footer";
import Nav from "../components/Nav";
import SideNav from "../components/SideNav";
import ItemCard from "../components/ItemCard";

// eslint-disable-next-line react/prop-types
const SubPage = ({item = []}) => {
    return (
    <main className='relative'>
        <Nav noLinks={true}/>
        <section className='padding-x padding-t h-full'>
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
