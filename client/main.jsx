import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import { renderRoutes } from '../imports/startup/routes';

Meteor.startup(() => {
    render(renderRoutes(), document.getElementById('react-target'));
});