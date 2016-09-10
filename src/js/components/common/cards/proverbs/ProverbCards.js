import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import ProverbCard from './ProverbCard';

const ProverbCards = ({ proverbs }) => {
  return (
    <div>
      {Object.keys(proverbs).map(key => {
        return <ProverbCard key={key} proverb={proverbs[key]} />
      })}
    </div>
  )
 }

ProverbCards.propTypes = {
  proverbs: PropTypes.object
};

export default ProverbCards;
