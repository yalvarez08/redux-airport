import React, { useState } from 'react';
import {useSelector} from 'react-redux';

import AirlineForm from '../AirlineForm/AirlineForm';
import AirlineList from '../AirlineList/AirlineList';

function App() {

  const reduxStore = useSelector(store => store);
  

  return (
    <>
      <pre>{JSON.stringify(reduxStore)}</pre>

      <div>
        <header>
          <h1>Redux Airport</h1>
        </header>
        {/* <p>The current airlines list is: {airlines}</p> */}
      </div>
      {/* <button onClick={() => dispatch({ type: 'AIRLINELIST_ADD', payload: 'united' })}>Add</button> */}

        <AirlineForm />

        <AirlineList />
    </>
  );
}

export default App
