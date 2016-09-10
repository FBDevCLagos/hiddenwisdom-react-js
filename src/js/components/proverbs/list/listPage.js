import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import ProverbCards from '../../common/cards/proverbs/ProverbCards';

const ListPage = ({ proverbs }) => {
   return (
     <div className="proverbs-index">
       <ProverbCards proverbs={proverbs} />
     </div>
   );
 }

 ListPage.propTypes = {
   proverbs: PropTypes.object.isRequired
 }

 export default ListPage;
