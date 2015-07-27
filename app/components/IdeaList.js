var React = require('react');
var Idea = require('./Idea');

var IdeaList = React.createClass({
  render: function() {
    var ideas = this.props.ideas.map(function(idea) {
      return <Idea idea={idea} key={idea.title} />;
    });

    return (
      <section className="ideas">
        {ideas}
      </section>
    );
  }
});

module.exports = IdeaList;

