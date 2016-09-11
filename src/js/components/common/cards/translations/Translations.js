import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import Translation from './Translation';

const Translations = ({ translations }) => {
   return (
    <div className="c-translations">
      {Object.keys(translations).map(key => {
        return <Translation key={key} translation={translations[key]} />
      })}
    </div>
   )
 }

 Translations.propTypes = {
  translations: PropTypes.array
 }

 export default Translations;
