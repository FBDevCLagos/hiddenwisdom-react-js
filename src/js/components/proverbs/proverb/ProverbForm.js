import React, { PropTypes, Component } from 'react';
import { isEmpty, findIndex, isUndefined } from 'underscore';
import TextInput from '../../common/textinput/Index.js';
import SelectInput from '../../common/select/Index.js';
import TextArea from '../../common/textarea/Index';
import TranslationForm from './TranslationForm';

class ProverbForm extends Component {
  constructor(props) {
    super(props);

    const { proverb } = this.props;

    this.state = { proverb };

    this.handleAddForm = this.handleAddForm.bind(this);
    this.updateTranslation = this.updateTranslation.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { proverb } = nextProps;
    this.setState({ proverb });
  }

  handleChange(field, value) {
    let { proverb } = this.state;
    proverb[field] = value;
    return this.setState({ proverb });
  }

  generateTranslationId({ translations }) {
    return translations.map(t => t.id)
    .reduce((pre, cur) => Math.max(pre, cur), 0) + 1;
  }

  handleAddForm(e) {
    e.preventDefault();
    let { proverb } = this.state;
    let { translations } = proverb;
    const translation = { id: this.generateTranslationId(proverb), body: "", language: "" };
    translations = [ ...translations, translation ];
    
    proverb = Object.assign({}, proverb, { translations });
    this.setState({ proverb });
  }

  handleRemove(translation) {
    let { proverb } = this.state;
    let { translations } = proverb;

    translations = translations.filter(obj => obj.id !== translation.id);
    proverb = Object.assign({}, proverb, { translations });
    
    this.setState({ proverb });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { proverb } = this.state;
    this.props.handleSubmit(proverb);
  }

  updateTranslation(translation) {
    const { translations } = this.state.proverb;
    const idx = findIndex(translations, (t) => t.id === translation.id);

    const existingProverbIndex = translations.findIndex(t => t.id == translation.id);
    
    translations.splice(existingProverbIndex, 1, translation);

    this.handleChange("translations", Object.assign([], translations));
  }

  renderQuote() {
    const { body="" } = this.state.proverb;
    return (
      <TextArea
        name="body"
        label="Quote"
        value={body}
        onChange={this.handleChange} />      
    );
  }

  renderTranslations() {
    const { translations } = this.state.proverb;
    return translations.map((translation, idx) => {
      return (
        <TranslationForm
          key={idx} 
          translation={translation} 
          handleTranslation={this.updateTranslation}
          handleRemoveForm={this.handleRemove} />
      )
    });
  }

  renderTags() {
   const { tags } = this.state.proverb;
    return (
      <SelectInput
        name="tags"
        label="Tags"
        hint="Enter a value that's NOT in the list, then hit enter"
        options={tags}
        onChange={this.handleChange} />      
    );
  }

  renderFormControl() {
    const { loading } = this.props;
    return (
      <div className="row form-group proverb-form-control">
        <div className="pull-xs-left">
          <input
            type="button"
            disabled={loading}
            value={loading ? 'Saving...' : 'Save'}
            className="btn btn-primary"
            onClick={this.handleSubmit} />           
        </div>
        <div className="pull-xs-right"> 
          <button
            className="btn btn-primary"
            onClick={this.handleAddForm}>
            Add Translation
          </button>           
        </div>          
      </div>      
    );
  }

  render() {
    return (
      <div className="proverb-form">
        <form>
          {this.renderQuote()}
          {this.renderTranslations()}
          {this.renderTags()}
          {this.renderFormControl()}
        </form>
      </div>
    );
  }
}

ProverbForm.propTypes = {
  loading     : PropTypes.bool,
  proverb     : PropTypes.object.isRequired,
  handleSubmit: PropTypes.func
};

export default ProverbForm;
