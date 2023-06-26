import SummaryDetailTag from '../SummaryDetailTag/SummaryDetailTag';
import scoreData from '../../../../../data.json';
import './summary-card.styles.css';

function SummaryCard() {
  return (
    <div className='summary-card__container'>
      <h3 className='summary-card__title'>Summary</h3>
      {scoreData.map((categoryScore, idx) => {
        return <SummaryDetailTag key={idx} categoryScore={categoryScore} />;
      })}
      <button type='button' className='summary-card__button'>
        Continue
      </button>
    </div>
  );
}

export default SummaryCard;
