import React, { Component } from 'react';
import { Link } from 'react-router';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {
  render() {
    // console.log(this.props);

    const { song } = this.props.data;

    if (!song) { return <div></div>; }

    return (
      <div>
        <Link to ="/">Back</Link>
        <h3>{song.title}</h3>
      </div>
    );
  }
}

export default graphql(fetchSong, {
  options: (props) => {
    return {
      variables: {
        id: props.params.id
      }
    }
  }
})(SongDetail);