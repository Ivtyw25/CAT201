import {useState, useEffect} from 'react'
import {
    DipPlayCafe,
    EscapeThemePark,
    Kidland,
    TheTopPenang
} from '../assets/images'
import ItemCard from '../components/ItemCard';
import Nav from '../components/Nav';
import SideNav from '../components/SideNav';
import Footer from '../sections/Footer';

const Themeparks = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/getThemeparks');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    // Create a mapping of image names to their respective imports

    const imageMap = {
        DipPlayCafe,
        EscapeThemePark,
        Kidland,
        TheTopPenang
    };

    return (
        <main className='relative'>
        <Nav/>
        <section className='padding-x padding-t'>
            <section className='max-container'>
                <div className='flex flex-row max-lg:flex-col gap-10'>
                    <SideNav/>
                    <div className='grid grid-cols-1 gap-10'>
                        {data.map((data,index) => (
                            <ItemCard 
                                index={index}
                                key={index}
                                title={data.title}
                                rating={data.rating}
                                description={data.description}
                                price={data.price}
                                address={data.address}
                                image={imageMap[data.image]}/>
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

export default Themeparks