import React, { PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { saveProverb, loadProverbs } from '../../../actions/proverbActions';
import { isEmpty } from 'underscore';
import ProverbForm from './ProverbForm';

class Proverb extends Component {
  constructor(props, context) {
    super(props);

    const { proverb } = this.props;
    this.state = {
      proverb,
      errors    : {},
      loading   : false 
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.proverb.id != nextProps.proverb.id) {
      this.setState({ proverb: Object.assign({}, nextProps.proverb) });
    }
  }  

  handleSubmit(proverb) {
    // console.log(proverb);
    // this.props.saveProverb(proverb);
  }

  handleChange(field, value) {
    let { proverb } = this.state;
    proverb[field] = value;
    return this.setState({ proverb });
  }

  render() {
    const { proverb, errors, loading } = this.state;
    return (
      <div className="panel-container about-page">
        <h3>Create a new proverb</h3>
        <ProverbForm
          proverb={proverb}
          loading={loading}
          errors={errors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} />
      </div>
    )    
  }
}

Proverb.contextTypes = {
  router: PropTypes.object.isRequired
};

Proverb.propTypes = {
  proverb     : PropTypes.object,
  loadProverbs: PropTypes.func,
  saveProverb : PropTypes.func
};

const getProverbValues = (proverbId, proverbs) => {
  const proverb = Object.values(proverbs).filter(proverb => proverb.id.toString() === proverbId);
  return !isEmpty(proverb) ? proverb[0] : null;
}

const mapStateToProps = (state, ownProps) => {
  let proverb = { body: '', language: "en", translation: '', tags: [], author: '' };
  const { proverbs } = state;
  const { proverbId } = ownProps.params;
  
  if (proverbId && Object.values(proverbs).length > 0) {
    proverb = getProverbValues(proverbId, proverbs);
  }

  return { proverb };
};

const mapDispatchToProps = {
  loadProverbs,
  saveProverb
};

export default connect(mapStateToProps, mapDispatchToProps)(Proverb);
