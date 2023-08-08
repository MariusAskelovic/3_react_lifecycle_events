import './styles/index.css'
import './styles/App.css'
import CardList from './components/CardList';
// import Counter from './components/counter/Counter';
import CounterList from './components/counter/CounterList';
import PersonList from './components/persons/PersonList';

function App() {
  return <div className="app">
    <h1>Hello Vite</h1>
    {false && <CounterList />}

    {false && <CardList />}

    <PersonList />
  </div>
}

export default App;