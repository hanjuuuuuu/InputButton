import React, { useState } from 'react'

import InputSample from './InputSample';
import ResultSample from './resultSample';

function App() {
  const [inputData, setInputData] = useState({
    text: "Hello"});

  const getData = (data) => {
    setInputData(data.text);
  }

  return (
    <div>
        <div>
            <div>
                <InputSample getData={getData} />
            </div>
            <hr />
            <div>
                <ResultSample inputData={inputData}/>
            </div>
        </div>
    </div>
  )
}

export default App;