import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setEpisodes, setOrigin } from '../characterSlice';


const Characters = ({ characters = [] }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Navegación a episodios
    const handleEpisodes = (episodes) => {
        dispatch(setEpisodes(episodes));
        navigate('/episodes');
    };

    // Navegación a origen
    const handleOrigin = (item) => {
        const originData = {
            image: item.image,
            name: item.name,
            origin: item.origin.name,
            location: item.location.name,
        };
        dispatch(setOrigin(originData));
        navigate('/origin');
    };

    return (
        <div className="row">
            {
                characters.map((item, index) => (
                    <div key={index} className="col mb-4">
                        <div className="card" style={{ maxWidth: "200px" }}>
                            <img src={item.image} alt="" />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p><strong>Estado:</strong> {item.status}</p>
                                <p><strong>Especie:</strong> {item.species}</p>
                                <p><strong>Género:</strong> {item.gender}</p>

                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-outline-primary btn-sm" onClick={() => handleEpisodes(item.episode)}>Episodios</button>

                                    <button className="btn btn-outline-primary btn-sm" onClick={() => handleOrigin(item)}>Origen</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Characters;
