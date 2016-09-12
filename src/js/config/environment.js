let host;

if (process.ENV === 'production') {
  host = "//hiddenwisdom-api.herokuapp.com/api/v1"
} else {
  host = "//hiddenwisdom-api.herokuapp.com/api/v1"
}

module.exports = {
  host
};
