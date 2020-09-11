import React from 'react';
import { App, View} from 'framework7-react';
import HomePage from './components/Home';
import AboutPage from './components/About';
import Param from './components/Param';
const f7params = {
  name: 'My App',
  id: 'com.myapp.test',
  // specify routes for app
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/about/',
      component: AboutPage,
    },
    {
      path: '/param/:id/:title?',
      component: Param,
    },
  ],
};

export default () => (
  <App params={f7params}>
    {/* Current View/Router, initial page will be loaded from home.jsx component */}
    <View main url="/" />
  </App>
)