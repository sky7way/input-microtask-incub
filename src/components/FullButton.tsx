import React, {useState} from 'react';

export const FullButton = () => {
    const [title, setTitle] = useState('')

    return (
        <div>
            <input type="text"/>
            <button>Add</button>
        </div>
    )
}
