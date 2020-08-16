import React from 'react';

const Planet = ({ planet }) => {
    return (
        <div className='list-item card mb-3 '>
            <div className='card-body'>
                <h3 className='title card-title'>{planet.name}</h3>
                <p className='card-text'>population-{planet.population}</p>
                <p className='card-text'>terrain-{planet.terrain}</p>

            </div>
        </div>
    );
}

export default Planet;
