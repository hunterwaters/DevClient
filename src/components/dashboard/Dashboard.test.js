import React from 'react';
import ReactDOM from 'react-dom';
import DashboardActions from './DashboardActions';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DashboardActions />, div)
})