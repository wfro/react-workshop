var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var $ = require('jquery');
var IdeaList = require('../app/components/IdeaList.js');

describe('IdeaList', function() {
  var $IdeaList;
  beforeEach(function() {
    var ideas = [
      {id: 1, title: 'foo', body: 'bar'},
      {id: 2, title: 'baz', body: 'quux'},
    ];
    var list = TestUtils.renderIntoDocument(
      <IdeaList ideas={ideas} />
    );
    $IdeaList = $(TestUtils.findRenderedDOMComponentWithTag(
      list, 'section').getDOMNode());
  });

  it('renders a list of ideas', function() {
    expect($IdeaList.find('.idea')).toHaveLength(2);
  });
});

