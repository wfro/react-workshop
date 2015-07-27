var React = require('react');

var Idea = React.createClass({
  render: function() {
    var idea = this.props.idea;

    return (
      <div className="idea">
        <h2>{idea.title}</h2>
        <p>{idea.body}</p>
        <div className="buttons">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    );
  }
});

module.exports = Idea;

