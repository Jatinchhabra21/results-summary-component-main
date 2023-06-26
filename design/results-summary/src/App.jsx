import './App.css';
import Scorecard from './components/Scorecard/Scorecard';

function App() {
  return (
    <div className='result__container'>
      <Scorecard score={76} />
    </div>
  );
}

export default App;
