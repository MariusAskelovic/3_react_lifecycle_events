import { personData } from "./data";
import Person from "./Person";

function PersonList() {
    let howManyFemales = 0;
    personData.forEach((oneObj) => oneObj.gender === 'female' ? howManyFemales++ : '')
    const howMany37yoPlus = personData.filter((oneObj) => oneObj.age > 37)
    const longestNamePerson = personData.reduce((longestNameObj, currentObj) => {
        if (currentObj.name.length > longestNameObj.name.length) {
            return currentObj;
        } else {
            return longestNameObj;
        }
    })
    const hobbies = personData.map((oneObj) => {
        return oneObj.hobby;
    }).join(', ') + '.'

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
            </div>
            <h4>There are {personData.length} persons</h4>
            <h4>There are {howManyFemales} females</h4>
            <h4>There are {howMany37yoPlus.length} persons older than 37yo</h4>
            <h4>{longestNamePerson.name}</h4>
            <h4>Full hobbies list: {hobbies}</h4>
        </div>
    )
}
export default PersonList