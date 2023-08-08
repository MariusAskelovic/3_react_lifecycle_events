import { useState } from 'react';

function Person(props) {
    const maleOrFemale = props.gender === 'male' ? 'male' : 'female';
    const lytis = props.gender === 'male' ? 'vyras' : 'moteris';
    const [status, setStatus] = useState(false);

    function toggleStatus() {
        setStatus(status === true ? false : true)
    }

    return (
        <div className={`${maleOrFemale} personCard ${status === true ? 'special' : ''}`}>
            <h3>Vardas: {props.name}</h3>
            <p>{props.name} yra {props.age} metu {lytis}</p>
            <p>Hobis: {props.hobby}</p>
            <button onClick={toggleStatus}>{status === false ? 'Make Special' : 'Make Normal'}</button>
        </div >
    )
}
export default Person;