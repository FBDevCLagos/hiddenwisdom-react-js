import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import ProverbCard from './ProverbCard';

const ProverbCards = ({proverbs}) => {
  let proverbsArr = []
  for(let key in proverbs) {
    proverbsArr.push(
      <ProverbCard key={key} proverb={proverbs[key]} />
    )
  }
   return (
     <div>
       {proverbsArr}
     </div>
   )
 }

 ProverbCards.propTypes = {
    proverbs: PropTypes.object
 }

 export default ProverbCards;
