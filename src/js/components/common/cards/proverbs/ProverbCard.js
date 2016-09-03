import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import Translations from '../translations//Translations';

const ProverbCard = ({proverb}) => {
   return (
     <div className="proverb-card">
       <div className="card">
         <div className="card-header">
           <i className="fa fa-comment-o"></i>
           {proverb.body}
         </div>
         <Translations
           translations={proverb.translations} />

         <div className="card-footer">
           <div className="tags">
             {proverb.tags && proverb.tags.map(tag => {
               return <span className="chip">{tag}</span>
             })}
           </div>
           <div className="fav-buttons">
            <span className="chip">
              <i className="fa fa-heart"
                aria-hidden="true">
              </i>
            </span>
            <span className="chip">
              <i className="fa fa-share"
                aria-hidden="true">
              </i>
            </span>
           </div>
         </div>
       </div>
     </div>
   )
 }

 ProverbCard.propTypes = {
   proverb: PropTypes.object
 }

 export default ProverbCard;
