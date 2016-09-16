import React, { PropTypes, Component } from 'react';
import Select from 'react-select';
import { isEmpty, isArray, pluck } from 'underscore';

const formatOptions = options => options.map(
  option => Object.assign({}, 
  { value: option, 
    label: option
  })
);

const formatSelectedOptions = options => options.map(
  option => Object.assign({}, option,
  { value: option, 
    label: option, 
    className: "Select-create-option-placeholder" 
  })
);

const getValues = values => {
  return isArray(values) ? pluck(values, 'value') : [ values.value || '' ];
}

const formatValue = value => {
  return value ? { label: value, value } : '';
}

class SelectInput extends Component {
  constructor(props) {
    super(props);

    const { multi, options, value } = this.props;
    
    this.state = {
      multi,
      value     : formatValue(value),
      options   : (isEmpty(options) ? options : formatOptions(options)),
      multiValue: []
    }

    this.handleOnChange= this.handleOnChange.bind(this);
  }

  componentWillMount () {
    const { options } = this.props;
    let multiValue = formatSelectedOptions(options);
    this.setState({ multiValue });     
  }  

  componentWillReceiveProps (nextProps) {
    const { options } = nextProps;
    let multiValue = formatSelectedOptions(options);
    this.setState({ multiValue }); 
  }

	handleOnChange (value) {
		const { multi } = this.state;
    const { name } = this.props;

		if (multi) {
			this.setState({ multiValue: value });
		} else {
			this.setState({ value });
		}

    this.props.onChange(name, getValues(value));
	}

  render() {
    const { multi, multiValue, options, value } = this.state;
    const { error, name, label, hint } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <div className="field">
          <Select.Creatable
            name={name}
            multi={multi}
            options={options}
            onChange={this.handleOnChange}
            value={multi ? multiValue : value}
            noResultsText={"No Tags Found"}
          />       
          {error && <div className="alert alert-danger">{error}</div>}
          <small className="hint form-text text-muted">{hint}</small>
        </div>
      </div>     
    );
  }  
}

SelectInput.defaultProps = {
  multi   : true,
  options : []
}

SelectInput.propTypes = {
  name      : PropTypes.string,
  hint      : PropTypes.string,
  multi     : PropTypes.bool,
  label     : PropTypes.string,
  options   : PropTypes.array,
  onChange  : PropTypes.func,
  error     : PropTypes.object,
  value     : PropTypes.string
}

export default SelectInput;