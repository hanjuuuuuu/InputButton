import React from 'react';
 
function ResultSample(props) {
    const { inputData } = props
 
    return(
        <div>
            Result: <input value={inputData.text}/>
        </div>
    )
}
 
export default ResultSample;