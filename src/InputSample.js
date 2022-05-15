import React, {useState} from 'react';

function InputSample() {
    const [text, setText] = useState("hello");

    const chktxt = (e) => {
        setText(e.target.value);
    }

    const printtxt = () => {
        alert(text);
        setText('');
    }

    return (
        <div>
            <input onChange={chktxt} value={text}/>
            <button onClick={printtxt}>버튼</button>  
        </div>
    );
}

export default InputSample;