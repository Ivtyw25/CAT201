import { useState, useEffect } from "react"
import {CityHallAndTownHall,
    ClanJetty,
    Esplanade,
    FortCornwallis,
    KhooKongsi,
    PenangHillMosque,
    PenangStreetWallMurals,
    QueenVictoriaMemorialClockTower} from '../assets/images'

const CultureAndHeritage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/getCultureAndHeritage');
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
        CityHallAndTownHall,
        ClanJetty,
        Esplanade,
        FortCornwallis,
        KhooKongsi,
        PenangHillMosque,
        PenangStreetWallMurals,
        QueenVictoriaMemorialClockTower
    };

    return (
        <div>
            <h1>Culture & Heritage</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>Address: {item.address}</p>
                        <p>Rating: {item.rating}</p>
                        {item.image && (
                            <img src={imageMap[item.image]} alt={item.title} />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CultureAndHeritage