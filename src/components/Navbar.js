import React from 'react';

const Navbar = ({ setpage }) => {
    return (
        <nav className='nav'>
            <div className='container'>
                <div className='content'>
                    <button className='btn' onClick={() => setpage('planets')}>planets</button>
                    <button className='btn' onClick={() => setpage('people')}>people</button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
