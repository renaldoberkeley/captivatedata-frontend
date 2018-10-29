import React from 'react';
import ReactDOM from 'react-dom';
import AdelineSGDContainer from './AdelineSGDContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AdelineSGDContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
