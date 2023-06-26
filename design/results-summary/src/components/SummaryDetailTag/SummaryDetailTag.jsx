import PropTypes from 'prop-types';
import './summary-detail-tag.styles.css';

function SummaryDetailTag({ categoryScore }) {
  const { category, icon, score } = categoryScore;
  return (
    <div className={`summary-detail-tag__container ${category.toLowerCase()}`}>
      <span className='summary-detail-tag__tag-container'>
        <img src={`/assets/images/${icon}.svg`} />
        <p>{category}</p>
      </span>
      <p className='summary-detail-tag__score'>
        <span className='summary-detail-tag__score-result'>{score}</span> / 100
      </p>
    </div>
  );
}

export default SummaryDetailTag;

SummaryDetailTag.propTypes = {
  categoryScore: PropTypes.object,
  category: PropTypes.string,
  score: PropTypes.number,
  icon: PropTypes.string,
};
