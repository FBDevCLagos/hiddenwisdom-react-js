import React, { PropTypes, Component } from 'react';

const getDefault = props => {
  return props.value || '';
};

class TextArea extends Component {
  constructor(props) {
    super(props)

    const value = getDefault(props);
    this.state = { value };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    const value = getDefault(nextProps);
    this.setState({ value }); 
  }

  handleChange (event) {
    const { onChange, name } = this.props;
    const { value } = event.target;

    this.setState({ value });
    return onChange(name, value);
  }

  render() {
    const { name, label, value, placeholder, onChange, error } = this.props;
    let wrapperClass = '';
    if (error && error.length > 0) {
      wrapperClass += ' ' + 'has-error';
    }

    return (
      <div className={`${wrapperClass} form-group`}>
        <label htmlFor={name}>{label}</label>
        <div className="field">
          <textarea
            name={name}
            className="form-control"
            placeholder={placeholder}
            value={value}
            onChange={this.handleChange} />
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
      </div>
    );      
  }
}

TextArea.propTypes = {
  name      : PropTypes.string.isRequired,
  label     : PropTypes.string.isRequired,
  onChange  : PropTypes.func,
  value     : PropTypes.string,
  placeholder: PropTypes.string,
  error     : PropTypes.string
};

export default TextArea;