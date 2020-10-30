import logo from './logo.svg';
import './App.css';
import form from './FormDemo';
import ReservationForm from './FormDemoMultiple';

function App() {
  return (
    <div>
      {form()}
      <br></br><br></br>
      <ReservationForm />
    </div>
  );
}

export default App;
