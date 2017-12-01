import React from 'react';
import ReactDOM from 'react-dom';
import FormatForm from './FormatForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormatForm />, div);
});
