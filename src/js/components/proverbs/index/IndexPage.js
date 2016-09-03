import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import ProverbCards from '../../common/cards/proverbs/proverbCards';

const IndexPage = ({proverbs}) => {
   return (
     <div className="proverbs-index">
       <ProverbCards proverbs={proverbs} />
     </div>
   )
 }

 IndexPage.propTypes = {
   proverbs: PropTypes.object.isRequired
 }

 export default IndexPage;
