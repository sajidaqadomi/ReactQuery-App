import React from 'react';

const Person = ({ person }) => {
    return (
        <div className='list-item card mb-2'>
            <div className='card-body'>
                <h3 className='card-tiltle'>{person.name}</h3>
                <p className='card-text'>Gender - {person.gender}</p>
                <p className='card-text'> cBirth year - {person.birth_year}</p>

            </div>
        </div>
    );
}

export default Person;
