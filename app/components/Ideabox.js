var React = require('react/addons');
var $ = require('jquery');
var NewIdea = require('./NewIdea');
var IdeaList = require('./IdeaList');

require('../styles/app.css');

/**
 * DONE: Load a list of ideas dynamically from the server
 * DONE: User can create a new idea
 * TODO: User can edit an idea
 * TODO: User can delete an idea
 * TODO: User can search for ideas by title
 */

// User clicks edit
// Edit form appears
// User fills out data and hits submit
// Callback fires
// PUT request to server
var Ideabox = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired,
  },

  getInitialState() {
    return { ideas: [] };
  },

  componentDidMount() {
    // Load ideas from the server on initial render.
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: (ideas) => {
        this.setState({ ideas });
      },
      error: (xhr, status, err) => {
        console.error('Error while fetching ideas: ', err.toString());
        // Use fixtures when the server isn't running to make life easy
        this.setState({
          ideas: [
            {id: 1, title: 'Title #1', body: 'Lorem'},
            {id: 2, title: 'Title #2', body: 'Ipsum'},
            {id: 3, title: 'Title #3', body: 'Pizza'},
          ]
        });
      }
    });
  },

  handleIdeaSubmit(idea) {
    var {ideas} = this.state;
    ideas.push(idea);
    this.setState({data: ideas}, function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        type: 'POST',
        data: idea,
        success: (data) => {
          this.setState({data: data});
        },
        error: (xhr, status, err) => {
          console.error('error saving idea');
        }
      });
    });
  },

  // TODO: Why all ideas in ideas.json having their id's reset with strings?
  // TODO: best practice for updating ideas on the client with a POST/PUT?
  handleEditIdea(idea) {
    $.ajax({
      url: `${this.props.url}/${idea.id}`,
      dataType: 'json',
      type: 'PUT',
      data: idea,
      success: (data) => {
        console.log('data in success handler: ', data);
        var ideas = this.state.ideas;
        var ideaToUpdate = ideas.filter(i => i.id === data.id)[0];
        ideaToUpdate.body = data.body;
        ideaToUpdate.title = data.title;
        this.setState({ ideas });
      },
      error: (xhr, status, err) => {
        console.error('error updating idea');
      }
    });
  },

  render: function() {
    return (
      <div className="container">
        <heading>
          <h1>IdeaBox</h1>
        </heading>
        <NewIdea onIdeaSubmit={this.handleIdeaSubmit} />
        <IdeaList
          ideas={this.state.ideas}
          onEditIdea={this.handleEditIdea}
        />
      </div>
    );
  }
});

module.exports = Ideabox;

