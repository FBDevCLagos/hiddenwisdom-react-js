import React, {PropTypes} from 'react'; // eslint-disable-line no-unused-vars
import Translation from './Translation';

const Translations = ({translations}) => {
  let translationsArr = [];
  for (let key in translations) {
    translationsArr.push(
      <Translation key={key} translation={translations[key]} />
    )
  }
   return (
    <div>
      {translationsArr}
    </div>
   )
 }

 Translations.propTypes = {
    translations: PropTypes.object
 }

 export default Translations;
