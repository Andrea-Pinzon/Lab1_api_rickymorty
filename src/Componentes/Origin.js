import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Origin = () => {
    const navigate = useNavigate();
    const originData = useSelector(state => state.characters.selectedOrigin);

    return (
        <div className="my-5">
            <h1>Origen y Localización</h1>

            {originData && originData.name ? (
                <div>
                    <img src={originData.image} alt="" style={{ maxWidth: "200px" }} />
                    <p><strong>Nombre:</strong> {originData.name}</p>
                    <p><strong>Origen:</strong> {originData.origin}</p>
                    <p><strong>Localización:</strong> {originData.location}</p>
                </div>
            ) : (
                <p>No hay información disponible.</p>
            )}

            <button className="btn btn-outline-primary btn-sm text-uppercase" onClick={() => navigate('/')}>Volver</button>
        </div>
    );
};

export default Origin;
