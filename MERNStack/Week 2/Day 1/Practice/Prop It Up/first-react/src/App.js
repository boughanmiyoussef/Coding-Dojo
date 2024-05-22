import logo from './logo.svg';
import './App.css';
import PersonCard from './components/person'

function App() {
  const people = [{firstName:"Jane", lastname:"Doe", age:45, hairColor:"Black"},
  {firstName:"John", lastName:"Smith", age:88, hairColor:"Brown"},
  {firstName:"Millard", lastName:"Fillmore", age:50, hairColor:"Brown"},
  {firstName:"Maria", lastName:"Smith", age:62, hairColor:"Brown"}];
  return (
    <div className="App">
      {people.map((person,idx)=><PersonCard key={idx} person={person}/>)}
    </div>
  );
}

export default App;
