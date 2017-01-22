import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import text from './text';

/*eslint-disable react/no-danger*/

const About = () => {
  return (
    <div className="panel-container">
      <h3 className="about">{text.header}</h3>
      <div className="about-page row">
        <div className="content col-8 col-md-8 offset-md-2">
          {text.quotes.map(({quote, author, desc}) => {
            return (
              <div key={author}>
                <blockquote className="blockquote">{quote}
                  <span className="author">- {author}</span>
                </blockquote>
                <p dangerouslySetInnerHTML={{__html: desc}} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

About.propTypes = {
}

export default About;
