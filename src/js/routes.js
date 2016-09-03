import React from 'react'; // eslint-disable-line no-unused-vars
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/Index';
import AboutPage from './components/about/Index';
import ProfilePage from './components/profile/Index';
import Proverbs from './components/proverbs/index/Index';
import NewProverb from './components/proverbs/new/Index';

export default (
  <Route path="/" component={App} >
    <IndexRoute component={HomePage} />

    <Route path="/proverbs" >
      <IndexRoute component={Proverbs} />
      <Route path="/proverbs/new" component={NewProverb} />
    </Route>

    <Route path="/about" component={AboutPage} />
    <Route path="/profile" component={ProfilePage} />
  </Route>
)
