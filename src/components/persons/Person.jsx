import { useState } from 'react';

function Person(props) {
    const maleOrFemale = props.gender === 'male' ? 'male' : 'female';
    const lytis = props.gender === 'male' ? 'vyras' : 'moteris';
    const [status, setStatus] = useState(false);

    function toggleStatus() {
        // setStatus(status ? false : true)
        // !status visa laika apvercia
        // jei true - bus false, jei false - bus true
        setStatus(!status)
    }

    return (
        <div className={`${maleOrFemale} personCard ${status ? 'special' : ''}`}>
            <h3>Vardas: {props.name}</h3>
            <p>{props.name} yra {props.age} metu {lytis}</p>
            <p>Hobis: {props.hobby}</p>
            <button onClick={toggleStatus}>{status ? 'Make Normal' : 'Make Special'}</button>
        </div >
    )
}
export default Person;