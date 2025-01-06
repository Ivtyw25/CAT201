import { useEffect, useState } from 'react';
import SideNav from '../components/SideNav';
import AiyuJelly from '../assets/images/aiyu_jelly.jpg';
import BuburChaCha from '../assets/images/bubur_cha_cha.jpg';
import Rojak from '../assets/images/rojak.jpg';
import CharKueyTeow from '../assets/images/char_kuey_teow.jpg';
import CheeCheongFun from '../assets/images/chee_cheong_fun.jpg';
import HokkienMee from '../assets/images/hokkien_mee.jpg';
import IceCendol from '../assets/images/ice_cendol.jpg';
import IceKacang from '../assets/images/ice_kacang.jpg';
import Nav from '../components/Nav';
import ItemCard from '../components/ItemCard';
import Footer from '../sections/Footer';

const FoodAndBeverage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/getFoodAndBeverage');
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
        AiyuJelly,
        BuburChaCha,
        Rojak,
        CharKueyTeow,
        CheeCheongFun,
        HokkienMee,
        IceCendol,
        IceKacang,
    };

    return (
        <main className='relative'>
            <Nav/>
            <section className='padding-x padding-t'>
                <section className='max-container'>
                    <div className='flex flex-row max-lg:flex-col gap-10'>
                        <SideNav/>
                        <div className='flex flex-col gap-10'>
                            {data.map((data,index) => (
                                <ItemCard 
                                    index={index}
                                    key={index}
                                    title={data.title}
                                    rating={data.rating}
                                    description={data.description}
                                    price={data.price}
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
};

export default FoodAndBeverage;
