import React from 'react';
import Ideabox from './components/Ideabox';

// Static ideas until we can implement ajax stuff
var IDEAS = [
  {id: 1, title: 'Lorem', body: 'ipsum'},
  {id: 2, title: 'Jon', body: 'Snow'},
  {id: 3, title: 'Eddard', body: 'Stark'}
];

React.render(<Ideabox data={IDEAS} />, document.getElementById('root'));
