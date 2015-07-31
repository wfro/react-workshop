var React = require('react');

var Idea = React.createClass({
  propTypes: {
    idea: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      body: React.PropTypes.string.isRequired,
    }).isRequired
  },

  getInitialState() {
    return { editing: false };
  },

  toggleForm() {
    this.setState({ editing: !this.state.editing });
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

    this.setState({ editing: false });

    console.log('idea in Idea: ', this.props.idea);
    this.props.onEditIdea({
      id: this.props.idea.id,
      title,
      body
    });
  },

  render: function() {
    var { title, body } = this.props.idea;
    var editForm = null;
    if (this.state.editing) {
      editForm = (
        <form className="edit-idea-form">
          <label>Title</label>
          <input ref="title" type="text" defaultValue={title} placeholder="Title" className="idea-title" />
          <label>Body</label>
          <input ref="body" type="text" defaultValue={body} placeholder="Body" className="idea-body" />
          <div className="buttons">
            <button className="save" onClick={this.handleSubmit}>Save</button>
            <button className="cancel" onClick={this.toggleForm}>Cancel</button>
          </div>
        </form>
      );
    }

    return (
      <div className="idea">
        <h2>{title}</h2>
        <p>{body}</p>
        <div className="buttons">
          <button className="edit" onClick={this.toggleForm}>Edit</button>
          <button className="delete">Delete</button>
        </div>
        {editForm}
      </div>
    );
  }
});

module.exports = Idea;

