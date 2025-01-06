import { useEffect, useState } from 'react';
import AiyuJelly from '../assets/images/aiyu_jelly.jpg';
import BuburChaCha from '../assets/images/bubur_cha_cha.jpg';
import Rojak from '../assets/images/rojak.jpg';
import CharKueyTeow from '../assets/images/char_kuey_teow.jpg';
import CheeCheongFun from '../assets/images/chee_cheong_fun.jpg';
import HokkienMee from '../assets/images/hokkien_mee.jpg';
import IceCendol from '../assets/images/ice_cendol.jpg';
import IceKacang from '../assets/images/ice_kacang.jpg';

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
        <div>
            <h1>Food & Beverages</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>Price: {item.price}</p>
                        <p>Rating: {item.rating}</p>
                        {item.image && (
                            <img src={imageMap[item.image]} alt={item.title} />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FoodAndBeverage;