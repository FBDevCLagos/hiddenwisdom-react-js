import React, { PropTypes, Component } from 'react';
import TextInput from '../../common/textinput/Index.js';
import SelectInput from '../../common/select/Index.js';
import TextArea from '../../common/textarea/Index'

let ProverbForm = props => {
  const { proverb, handleChange, errors, handleSubmit, loading, allLanguages } = props;
  return (
    <div className="proverb-form">
      <form>
        <TextArea
          key={1}
          name="body"
          label="Quote"
          value={proverb.body}
          onChange={handleChange}
          error={errors.quote} />

        <TextArea
          key={2}
          name="translation"
          label="Translation"
          value={proverb.translation}
          onChange={handleChange}
          error={errors.translation} />

        <SelectInput
          name="language"
          label="Translation Language"
          options={allLanguages}
          onChange={handleChange}
          multi={false}
          error={errors.language} />          

        <SelectInput
          name="tags"
          label="Tags"
          hint="Enter a value that's NOT in the list, then hit enter"
          options={proverb.tags}
          onChange={handleChange}
          multi={true}
          error={errors.tags} />

        <TextInput
          name="author"
          label="Author"
          value={proverb.author || ""}
          onChange={handleChange}
          error={errors.length} />           

        <div className="row form-group proverb-form-control">
          <div className="pull-xs-left">
            <input
              type="submit"
              disabled={loading}
              value={loading ? 'Saving...' : 'Save'}
              className="btn btn-primary"
              onClick={handleSubmit} />           
          </div>
          <div className="pull-xs-right">
            <button
              className="btn btn-primary">
              Add Translation
            </button>           
          </div>          
        </div>                          
      </form>
    </div>
  );
};

ProverbForm.propTypes = {
  loading     : PropTypes.bool,
  proverb     : PropTypes.object.isRequired,
  errors      : PropTypes.object.isRequired,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  allLanguages: PropTypes.array
};

export default ProverbForm;
