import React, {useState} from 'react';
import './App.css';
import {FullButton} from "./components/FullButton";

function App() {
    let [message, getMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])
    return (
        <div className={'App'}>
            <FullButton />
            {message.map((el, index) =>
                <div key={index}>{el.message}</div>
            )}
        </div>
    );
}

export default App;
