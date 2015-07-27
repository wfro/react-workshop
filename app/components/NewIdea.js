var React = require('react');

var NewIdea = React.createClass({
  propTypes: {
    onIdeaSubmit: React.PropTypes.func.isRequired
  },

  handleSubmit(e) {
    e.preventDefault();
    var title = React.findDOMNode(this.refs.title).value.trim();
    var body = React.findDOMNode(this.refs.body).value.trim();
    if (!title || !body) {
      return;
    }

    React.findDOMNode(this.refs.title).value = '';
    React.findDOMNode(this.refs.body).value = '';

    this.props.onIdeaSubmit({ title, body });
  },

  render() {
    return (
      <section className="new-idea">
        <h2>Add a New Idea</h2>
        <form className="new-idea-form" onSubmit={this.handleSubmit}>
          <label>Title</label>
          <input ref="title" className="new-idea-title" type="text" placeholder="Title" />
          <label>Body</label>
          <input ref="body" className="new-idea-body" type="text" placeholder="Body" />
          <input type="submit" value="Submit Your Great Idea" />
        </form>
      </section>
    );
  }
});

module.exports = NewIdea;

