import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const helloWorld = React.createElement('div', {}, 'hello world');

const complexHelloWorld = React.createElement(
  'div',
  {
    style: { background: 'grey', color: 'blue' },
  },
  'hello',
  React.createElement('div', { style: { color: 'green' } }, 'world'),
);

const complexHelloWorldTsx = (
  <div style={{ background: 'grey', color: 'blue' }}>
    hello<div style={{ color: 'green' }}>world</div>
  </div>
);

root.render(helloWorld);

const renderElement = (el: JSX.Element) => {
  root.render(el);
};

new Date(1920, 4, 18);
