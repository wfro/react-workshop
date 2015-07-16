jest.dontMock('../Ideabox.js');

describe('Ideabox', function() {
  it('renders a list of ideas', function() {
    var React = require('react/addons');
    var Ideabox = require('../Ideabox.js');
    var TestUtils = React.addons.TestUtils;

    // Render a checkbox with label in the document
    var App = TestUtils.renderIntoDocument(
      <Ideabox data={[{id: 1, title: 'a', body: 'b'}]} />
    );

    var ideas = TestUtils.findRenderedDOMComponentWithClass(
          App, 'ideas');

    console.log(ideas.getDOMNode());
  });
});
