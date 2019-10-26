import React, {useState} from 'react';

const InputMirror = () => {
    const [text, setText] = useState('');
    const onChangeHandler = (e) => setText(e.currentTarget.value);
    return (
        <div>
            <input type={'text'}
                   onChange={onChangeHandler}
                   value={text} />
            <span>{text.length}</span>
            <div>{text.toUpperCase()}</div>
        </div>
    );
};

export default InputMirror;