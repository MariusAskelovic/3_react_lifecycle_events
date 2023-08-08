import './styles/index.css'
import './styles/App.css'
import CardList from './components/CardList';
import Counter from './components/counter/Counter';

function App() {
  return <div className="app">
    <h1>Hello Vite</h1>
    {false && <CardList />}
    <Counter />
  </div>
}

export default App;