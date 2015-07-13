var React = require('react');

require('../styles/app.css');

var Ideabox = React.createClass({
  render: function() {
    return (
      <div className="container">
        <heading>
          <h1>IdeaBox</h1>
        </heading>
        <NewIdea />
        <IdeaList ideas={this.props.data} />
      </div>
    );
  }
});

var NewIdea = React.createClass({
  render: function() {
    return (
      <section className="new-idea">
        <h2>Add a New Idea</h2>
        <form className="new-idea-form">
          <label>Title</label>
          <input className="new-idea-title" type="text" placeholder="Title" />
          <label>Body</label>
          <input className="new-idea-body" type="text" placeholder="Body" />
          <input type="submit" value="Submit Your Great Idea" />
        </form>
      </section>
    );
  }
});

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

module.exports = Ideabox;

