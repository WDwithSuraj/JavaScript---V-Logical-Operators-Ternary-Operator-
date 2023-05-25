import logo from './logo.svg';
import './App.css';
import PinItem from './components/PinItem';

function App() {
  return (
    <div className="App">
      <PinItem length={4} maxLength={1} />
    </div>
  );
}

export default App;

