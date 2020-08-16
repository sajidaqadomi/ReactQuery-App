import React from 'react';
import { useQuery } from 'react-query';

import Person from './Person'

const People = () => {
    const fetchPeople = async () => {
        const res = await fetch('http://swapi.dev/api/people/')

        return res.json();
    }
    const { data, status } = useQuery('people', fetchPeople);
    return (
        <div className='people-conten'>
            <h2 className='name'>people</h2>
            {status === 'loading' && (
                <div>loadig data ...</div>

            )}
            {status === 'error' && (
                <div>error fetching data</div>

            )}

            {status === 'success' && (
                <div className='list'>
                    {data.results.map(person => <Person key={person.name} person={person} />)}
                </div>
            )}
        </div>
    );
}

export default People;
