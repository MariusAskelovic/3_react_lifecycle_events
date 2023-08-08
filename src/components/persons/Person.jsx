import { useState } from 'react';

function Person(props) {
    const maleOrFemale = props.gender === 'male' ? 'male' : 'female';
    const lytis = props.gender === 'male' ? 'vyras' : 'moteris';
    const [status, setStatus] = useState('normal');

    function toggleStatus() {
        setStatus(status === 'normal' ? 'special' : 'normal')
    }

    return (
        <div className={`${maleOrFemale} personCard ${status}`}>
            <h3>Vardas: {props.name}</h3>
            <p>{props.name} yra {props.age} metu {lytis}</p>
            <p>Hobis: {props.hobby}</p>
            <button onClick={toggleStatus}>{status === 'normal' ? 'Make Special' : 'Make Normal'}</button>
        </div >
    )
}
export default Person;