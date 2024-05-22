
import React,{useState} from 'react';

const PersonCard = (props) => {
    const { person }=props
    const [age, setAge] = useState(person.age)
    const increaseAge  = () => {
        console.log('hello')
        setAge(age+1)
    }
    return(
        <fieldset>
            <h1>{person.lastName},{person.firstName}</h1>
            <h3>Age:{age}</h3>
            <h3>Hair Color: {person.hairColor}</h3>
            <button onClick={()=> increaseAge()}>Birthday Button for {person.firstName} {person.lastName}</button>
        </fieldset>
    );
}
export default PersonCard;
