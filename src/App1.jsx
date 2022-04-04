import './App.css';
import Bala from './Components/Bala';
import Jura from './Components/Jura';
import Pasaulis from './Components/Pasaulis';
import Tvenkinys from './Components/Tvenkinys';
import Vandenynas from './Components/Vandenynas';

function App() {

  const seaPlaners = [
    {id: 1, type: 'man', name: 'Lina', color: 'blue'},
    {id: 2, type: 'car', name: 'Opel', color: 'red'},
    {id: 3, type: 'animal', name: 'Vilkas', color: 'green'},
    {id: 4, type: 'fish', name: 'Ungurys', color: 'yellow'},
    {id: 5, type: 'man', name: 'Tomas', color: 'green'},
    {id: 6, type: 'animal', name: 'Bebras', color: 'red'},
    {id: 7, type: 'animal', name: 'Barsukas', color: 'green'},
    {id: 8, type: 'car', name: 'MB', color: 'blue'},
    {id: 9, type: 'car', name: 'ZIL', color: 'red'},
    {id: 10, type: 'man', name: 'Teta Toma', color: 'yellow'},
  ];
  
  return (
    <div className="App">
        <section className='pr1'>
          <Bala list={seaPlaners}></Bala>
        </section>
        <hr></hr>
        <section className='pr1'>
            <Tvenkinys list={seaPlaners}></Tvenkinys>
        </section>
        <hr></hr>
        <section className='pr1'>
            <Jura list={seaPlaners}></Jura>
        </section>
        <hr></hr>
        <section className='pr1'>
            <Vandenynas list={seaPlaners}></Vandenynas>
        </section>
        <hr></hr>
        <section className='pr1'>
            <Pasaulis list={seaPlaners}></Pasaulis>
        </section>
    </div>
  );
}

export default App;
