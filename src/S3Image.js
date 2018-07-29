import React, { Component } from 'react';
import { Storage } from 'aws-amplify';

Storage.configure({ level: 'private' });

class S3Image extends Component {
  state = { src: null };

  async componentDidMount() {
    const { s3Key } = this.props;
    const src = await Storage.get(s3Key);
    this.setState({ src });
  }

  render() {
    const { src } = this.state;
    if (!src) return null;
    return (
      <article>
        <img src={src} />
      </article>
    );
  }
}

export default S3Image;
