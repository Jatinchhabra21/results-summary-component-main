import PropTypes from 'prop-types';
import './scorecard.styles.css';

function Scorecard({ score }) {
  return (
    <div className='score-card__container'>
      <h3 className='score-card__title'>Your Result</h3>
      <div className='score-card__score'>
        <h1 className='score-card__scored'>{score}</h1>
        <p className='score-card__total-score'>of 100</p>
      </div>
      <div className='score-card__comment'>
        <h2 >Great</h2>
        <p className='score-card__comment-summary'>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
}

export default Scorecard;

Scorecard.propTypes = {
  score: PropTypes.number,
};
