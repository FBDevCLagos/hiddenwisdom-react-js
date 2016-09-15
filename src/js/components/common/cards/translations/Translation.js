import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars

const Translation = ({ translation }) => {
  return (
    <div className="card-block">
      <blockquote className="card-blockquote">
        <p>{translation.body}</p>
        <footer>
          In: &nbsp;
          <cite title="lang">
            {translation.language}
          </cite>
        </footer>
      </blockquote>
    </div>
  )
}

Translation.propTypes = {
  translation: PropTypes.object
}

export default Translation;
