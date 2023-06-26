import './App.css';
import Scorecard from './components/Scorecard/Scorecard';
import SummaryCard from './components/SummaryCard/SummaryCard';

function App() {
  return (
    <div className='result__container'>
      <Scorecard score={76} />
      <SummaryCard />
    </div>
  );
}

export default App;
