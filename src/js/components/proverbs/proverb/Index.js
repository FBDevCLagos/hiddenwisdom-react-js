import React, { PropTypes, Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { saveProverb, loadProverbs } from '../../../actions/proverbActions';
import { isEmpty } from 'underscore';
import ProverbForm from './ProverbForm';
import toastr from 'toastr';

class Proverb extends Component {
  constructor(props, context) {
    super(props);

    const { proverb } = this.props;
    this.state = {
      proverb,
      loading   : false 
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.proverb.id !== nextProps.proverb.id) {
      this.setState({ proverb: Object.assign({}, nextProps.proverb) });
    }
  } 

  redirect() {
    this.setState({ loading: true });
    toastr.success('Proverb Saved');
    this.context.router.push('/proverbs');
  } 

  handleSubmit(proverb) {
    this.setState({ loading: true });
    this.props.saveProverb(proverb)
    .then(() => this.redirect())
    .catch(err => {
      toastr.error(err);
    });
  }

  render() {
    const { proverb, loading } = this.state;
    return (
      <div className="panel-container about-page">
        <h3>{`${this.props.params.proverbId ? "Edit" : "Create"} A Proverb`}</h3>
        <ProverbForm
          proverb={proverb}
          loading={loading}
          handleSubmit={this.handleSubmit} 
        />
      </div>
    )
  }
}

Proverb.contextTypes = {
  router: PropTypes.object
};

Proverb.propTypes = {
  proverb     : PropTypes.object,
  loadProverbs: PropTypes.func,
  saveProverb : PropTypes.func,
  params      : PropTypes.object
};

const getProverbValues = (proverbId, proverbs) => {
  const proverb = Object.values(proverbs)
  .filter(
    proverb => proverb.id.toString() === proverbId
  );

  return !isEmpty(proverb) ? proverb[0] : null;
}

const mapStateToProps = (state, ownProps) => {
  let proverb = { body: "", language: "en", translations: [] , tags: [], author: "" };
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
