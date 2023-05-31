import React, {useState} from 'react';
import './App.css';

function App() {
    let [message, getMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])
    return (
        <div>
            <div>
                <input type="text"/>
                <button>Add</button>
            </div>
            {message.map((el, index) =>
                <div key={index}>{el.message}</div>
            )}
        </div>
    );
}

export default App;
