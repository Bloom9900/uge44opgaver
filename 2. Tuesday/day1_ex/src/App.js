//import logo from './logo.svg';
import './App.css';
import upper, { text1, text2, text3 } from "./file1";
import object, {males, females, newFemales} from "./file2";
import {MultiWelcome} from "./file3";

const { firstName, email } = object;
const allPersons = [...males, ...females];
const allPersons2 = [...males, "Kurt", "Helle", ...females, "Tina"];


function App() {

  console.log(allPersons);
  console.log(allPersons2);

  return (
    <div>
      <h2>Ex 1</h2>
      <p>{upper("Uppercase me now")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>

      <h2>Ex 2</h2>
      <p>{firstName}</p>
      <p>{email}</p>

      <h2>Ex 3</h2>
      <MultiWelcome/>
    </div>
  );
}

export default App;
