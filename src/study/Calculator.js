import React, {useState} from 'react';

const Calculator = () => {
    const [total, setTotal] = useState(0);
    const [inputNum, setInputNum] = useState('');
    const textRef = React.createRef();
    const onChangeHandler = (e) => setInputNum(e.currentTarget.value);
    const plus = () => run(() => total + Number(inputNum));
    const minus = () => run(() => total - Number(inputNum));
    const run = (cb) => {
        setTotal(cb());
        setInputNum('');
        textRef.current.focus();
    };

    return (
        <div>
            <input type={'number'}
                   onChange={onChangeHandler}
                   value={inputNum}
                   ref={textRef}/>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <div>
               total: {total}
            </div>
        </div>
    );
};

export default Calculator;