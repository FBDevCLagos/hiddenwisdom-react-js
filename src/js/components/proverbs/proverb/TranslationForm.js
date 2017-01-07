import React, { PropTypes, Component } from 'react';
import SelectInput from '../../common/select/Index.js';
import TextArea from '../../common/textarea/Index';
import { languages } from '../../../utils/translationLanguages';
import { isArray } from 'underscore';

class TranslationForm extends Component{
  constructor(props) {
    super(props);
    
    const { id, body, language } = this.props.translation || {};

    this.state = { id, body, language };

    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleChange(field, value) {
    const { state } = this;
    const fieldValue = isArray(value) ? value[0] : value;
    const translation = Object.assign({}, state, { [field]: fieldValue });
    
    this.setState(Object.assign({}, translation));

    this.props.handleTranslation(translation);
  }

  handleRemove() {
    const { handleRemoveForm, translation } = this.props;
    handleRemoveForm(translation);
  }

  render() {
    const { body, language } = this.state;
    return (
      <div className="translation-form form-group">
        <a className="pull-xs-right close-form" onClick={this.handleRemove}>&times;</a>
        <TextArea
          name="body"
          label="Translation"
          value={body}
          onChange={this.handleChange} />
        <SelectInput
          name="language"
          label="Translation Language"
          value={language}
          options={Object.values(languages)}
          onChange={this.handleChange}
          multi={false} />       
      </div>
    );
  }
}

TranslationForm.propTypes= {
  translation      : PropTypes.object,
  handleTranslation: PropTypes.func,
  handleRemoveForm : PropTypes.func
};

export default TranslationForm;
