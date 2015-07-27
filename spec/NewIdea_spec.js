var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var $ = require('jquery');
var NewIdea = require('../app/components/NewIdea.js');

describe('NewIdea', function() {
  var $NewIdea, callback;
  beforeEach(function() {
    callback = jasmine.createSpy('spy');
    var newIdea = TestUtils.renderIntoDocument(
      <NewIdea onIdeaSubmit={callback} />
    );
    $NewIdea = $(TestUtils.findRenderedDOMComponentWithTag(
      newIdea, 'section').getDOMNode());
  });

  describe('when a new idea is submitted', function() {
    it('the onIdeaSubmit callback is invoked', function() {
      $NewIdea.find('input.new-idea-title')[0].value = 'new title';
      $NewIdea.find('input.new-idea-body')[0].value = 'new body';

      TestUtils.Simulate.submit($NewIdea.find('form')[0]);

      expect(callback).toHaveBeenCalledWith({ title: 'new title', body: 'new body' });
    });
  });
});

