import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { getData } from './actions/bitcoinActions';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const state = useSelector(state => state.bitcoin);
  const [num, setNum] = useState(15);

  const fetchData = (time) => {
    dispatch(getData({
      time: time,
      number: num,
    }));
  }

  return (
    <div className="App">
      <div className="btns-wrapper">
        <button onClick={() => fetchData('1min')}>1 Min</button>
        <button onClick={() => fetchData('5min')}>5 Min</button>
        <button onClick={() => fetchData('15min')}>15 Min</button>
        <input onChange={e => setNum(e.target.value)} type="text"/>
        {state.loading && <p>Loading...</p>}
      </div>
      <div className="chart-wrapper">
        <Line 
          data={state.data}
        />
      </div>
    </div>
  );
}

export default App;
