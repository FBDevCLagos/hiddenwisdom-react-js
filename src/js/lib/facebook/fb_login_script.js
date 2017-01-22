/*eslint-disable no-undef */

export default function fb_login_init(loginSuccessHandler) {
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1019149808185946',
      xfbml      : true,
      version    : 'v2.6'
    });
    FB.AppEvents.logPageView();

    if(!loginSuccessHandler) return;

    FB.getLoginStatus(function(response) {
      loginSuccessHandler(response)
    });
  };

  (function(d, s, id){
    let js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

