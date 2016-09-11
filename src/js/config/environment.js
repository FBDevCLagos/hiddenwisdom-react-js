let host;

if (process.ENV === 'production' || true) {
  host = "//hiddenwisdom-api.herokuapp.com/api/v1"
} else {
  host = "//hidden-wisdom-api-test.herokuapp.com/api/v1"
}

module.exports = {
  host
};
