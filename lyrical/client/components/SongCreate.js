import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import query from '../queries/fetchSongs';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {title: ''};
  };

  onSubmit(evt) {
    evt.preventDefault();

    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{ query }]
    }).then((res) => {
      hashHistory.push('/');
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h2>Create New Song</h2>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title</label>
          <input type="text" 
                 onChange={ev => this.setState({title: ev.target.value})}
                 placeholder="Title"
                 value={this.state.title} />
        </form>
      </div>
    );
  }
}

const mutation = gql`
  mutation AddSong($title: String){
    addSong(title: $title) {
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);