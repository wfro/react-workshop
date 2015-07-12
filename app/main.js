import React from 'react';

require('./styles/app.css');

class App extends React.Component {
  render() {
    return <div>Hi mom!</div>
  }
}

React.render(<App />, document.getElementById('root'));
