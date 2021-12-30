import logo from './logo.svg';
import './App.css';
import Button from './Components/Buttons/Button';
import Timer from './Components/Timer/Timer';



function App() {  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer></Timer>
        <h6>M.Sadra Haeri - 9731077</h6>
      </header>
    </div>
  );
}

export default App;
