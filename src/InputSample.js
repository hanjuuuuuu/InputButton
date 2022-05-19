import React, { useState } from 'react';
 
function InputSample(props) {
    const { getData } = props
    const [text, setText] = useState('Hello')
 
    const handleText = (e) => {
        setText(e.target.value)
    }
 
    const onSubmit = () => {
        const _inputData = {
            text: {text}
        }
        getData(_inputData)
        setText('')
    }
 
    return (
        <div>
            <div>
                Input: <input onChange={handleText} value={text} />
                <button onClick={onSubmit}>버튼</button>
            </div>
        </div>
    );
}
 
export default InputSample;