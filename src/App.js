import React, { useState } from 'react';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';
import { ReactQueryDevtools } from 'react-query-devtools'


function App() {
  const [Page, setpage] = useState('planets');
  return (
    <>
      <div className="App">
        <h1 className="main-tiltle title text-center">stars wars info</h1>
        <Navbar setpage={setpage} />
        <div className='app-content'>
          <div className='container'>
            {Page === 'planets' ? <Planets /> : <People />}

          </div>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
