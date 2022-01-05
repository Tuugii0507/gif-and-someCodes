import React, {useState} from "react";

const Input = ({ task, setTask }) => {

    const [text, setText] = useState('');

    const soligch = (e) => {
        e.preventDefault();
        setText(e.target.value)
    }

    const addFunction = () => {
        setTask( [ ...task, {text: text, completed: false }] )
    }


    console.log(text)

    return <div className="row">
        
        <input
        className="in"
        value={text}
        onChange={soligch}
        />
        <button className="bu" onClick={addFunction}>Add</button>
    </div>
}

export default Input;