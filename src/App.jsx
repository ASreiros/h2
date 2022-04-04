import './App.css';
import Circle from './Components/Circle';
import Gelytes from './Components/Gelytes';


function App() {

  const gelytes = [

    {name: 'Tulpė', color: 'red'},

    {name: 'Gvazdikas', color: 'yellow'},

    {name: 'Raktelis', color: 'blue'},

    {name: 'Bijūnas', color: 'red'},

    {name: 'Alyva', color: 'orange'},

]
  
  return (
    <div className="App">
        <Gelytes list={gelytes}></Gelytes>
        <Circle  size="200px"></Circle>
    </div>
  );
}

export default App;
