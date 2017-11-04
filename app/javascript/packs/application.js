/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb


// global styles
import "bulma/bulma.sass";
import 'font-awesome/scss/font-awesome.scss';
import '../styles/overrides.scss';
import '../styles/auth.scss';


import './Register';
import './Auth.jsx';
import './App.jsx';

document.addEventListener('DOMContentLoaded', () => {

  var signOut = document.getElementById('sign-out');

    if (signOut) {
      signOut.onclick = function() {
      localStorage.setItem('access_token', "");
      document.cookie = 'access_token=;';
      document.cookie = '_luminus_hd_session=;';
    }

  }

})

