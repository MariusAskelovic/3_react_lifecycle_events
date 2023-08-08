import { personData } from "./data";
import Person from "./Person";

function PersonList() {
    let howManyFemales = 0;
    return (
        <div>
            <div className="personsGrid">
                {personData.map((oneObj) => <Person
                    key={oneObj.id}
                    name={oneObj.name}
                    age={oneObj.age}
                    gender={oneObj.gender}
                    hobby={oneObj.hobby}
                />)}
                {personData.map((oneObj) => oneObj.gender === 'female' ? howManyFemales++ : '')}
            </div>
            <h3>There are {personData.length} persons</h3>
            <h3>There are {howManyFemales} females</h3>
        </div>
    )
}
export default PersonList