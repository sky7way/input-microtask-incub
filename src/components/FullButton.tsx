import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addButton: (title: string) => void
}
export const FullButton = (props: FullInputPropsType) => {
    const [title, setTitle] = useState('')
const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
}
const onClickButtonHandler = () => {
props.addButton(title)
    setTitle('')
}

    return (
        <div>
            <input type="text" value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>Add</button>
        </div>
    )
}
