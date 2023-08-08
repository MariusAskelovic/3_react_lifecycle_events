import { personData } from "./data";
import Person from "./Person";
function PersonList() {
    return (
        <div className="personsGrid">
            {personData.map((oneObj) => <Person
                key={oneObj.id}
                name={oneObj.name}
                age={oneObj.age}
                gender={oneObj.gender}
                hobby={oneObj.hobby}
            />)}
        </div>
    )
}
export default PersonList