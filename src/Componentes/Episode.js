import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Episode = () => {
    const navigate = useNavigate();
    const episodesFromState = useSelector(state => state.characters.selectedEpisodes);
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        if (episodesFromState.length > 0) {
            // Realizar solicitudes a cada URL de los episodios
            const fetchEpisodes = async () => {
                const promises = episodesFromState.map(url => fetch(url).then(res => res.json()));
                const episodeData = await Promise.all(promises);
                setEpisodes(episodeData);
            };
            fetchEpisodes();
        }
    }, [episodesFromState]);

    return (
        <div className="my-5">
            <h1>Episodios</h1>
            {episodes.length > 0 ? (
                <ol>
                    {episodes.map((episode, index) => (
                        <li key={index}>
                            {episode.name} (Air Date: {episode.air_date})
                        </li>
                    ))}
                </ol>
            ) : (
                <p>Cargando episodios...</p>
            )}
            <button className="btn btn-outline-primary btn-sm text-uppercase" onClick={() => navigate('/')}>Volver</button>
        </div>
    );
};

export default Episode;