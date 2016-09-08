let host;

if (process.ENV === 'production') {
  host = "//hidden-wisdom-api.herokuapp.com"
} else {
  host = "//hidden-wisdom-api-test.herokuapp.com"
}

module.exports = {
  host
};
