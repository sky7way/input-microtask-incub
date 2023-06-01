import React, {useState} from 'react';
import './App.css';
import {FullButton} from "./components/FullButton";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    let [message, getMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])
    const addButton = (title: string) => {
        getMessage([{message: title}, ...message])
    }

    return (
        <div className={'App'}>
            {/*<FullButton addButton={addButton}/>*/}
            <Input />
            <Button />
            {message.map((el, index) =>
                <div key={index}>{el.message}</div>
            )}
        </div>
    );
}

export default App;
