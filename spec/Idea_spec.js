var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var { Simulate } = TestUtils;
var $ = require('jquery');
var Idea = require('../app/components/Idea');

describe('Idea', function() {
  var $Idea, callback;
  beforeEach(function() {
    callback = jasmine.createSpy('onEditIdea');
    var idea = TestUtils.renderIntoDocument(
      <Idea idea={{id: 1, title: 'foo', body: 'bar'}} onEditIdea={callback} />
    );
    $Idea = $(TestUtils.findRenderedDOMComponentWithClass(
      idea, 'idea').getDOMNode());
  });

  describe('clicking the edit button', () => {
    beforeEach(() => {
      Simulate.click($Idea.find('.edit')[0]);
    });

    it('renders the edit form', function() {
      expect($Idea.find('.edit-idea-form')).toExist();
    });

    describe('and submitting an updated idea', () => {
      it('invokes the callback', () => {
        $Idea.find('.idea-title')[0].value = 'updated title';
        $Idea.find('.idea-body')[0].value = 'updated body';

        Simulate.click($Idea.find('.save')[0]);

        expect(callback).toHaveBeenCalledWith({ id: 1, title: 'updated title', body: 'updated body' });
      });
    });
  });
});

