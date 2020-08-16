import React, { useState } from 'react';
import { useQuery, usePaginatedQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async (key, greeting, page) => {
    // const res = await fetch('http://swapi.dev/api/planets/');
    const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
    return res.json();
}
const Planets = () => {
    const [Page, setPage] = useState(2);
    // const { data, status } = useQuery('planets', fetchPlanets)
    // const { data, status } = useQuery(['planets', 'hello', Page], fetchPlanets)//to pass variable
    const { resolvedData, latestData, status } = usePaginatedQuery(['planets', 'hello', Page], fetchPlanets)
    return (
        <div className='planets-content'>
            <h2 className='name'>Planets</h2>
            {/* <button onClick={() => setPage(1)}>page 1</button>
            <button onClick={() => setPage(2)}>page 2</button>
            <button onClick={() => setPage(3)}>page 3</button> */}
            {status === 'loading' && (
                <div className='loading status'>loadig data ...</div>

            )}
            {status === 'error' && (
                <div className='error status'>error fetching data</div>

            )}

            {status === 'success' && (
                <>
                    <div className='pagination-area mb-2'>
                        <button
                            className='btn'
                            onClick={() => { setPage((old) => Math.max(1, old - 1)) }}
                            disabled={Page === 1}
                        >Prev</button>
                        <span className="page-number">{Page}</span>
                        <button
                            className='btn'
                            onClick={() => setPage(old => (!latestData || !latestData.next ? old : old + 1))}
                            disabled={!latestData || !latestData.next}
                        >Next Page</button>
                    </div>

                    <div className='list'>
                        {resolvedData.results.map(planet => <Planet key={planet.name} planet={planet} />)}
                    </div>
                </>
            )}
        </div>
    );
}

export default Planets;
