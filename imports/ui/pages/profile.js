import React from 'react';
import { Row } from 'react-bootstrap';
import ProfileComponent from '../containers/profile.js';

export class Profile extends React.Component {
  componentDidMount() {
    console.log('mounted');
  }

  render() {
    return <Row>
      <ProfileComponent email={ this.props.params.email } />
    </Row>;
  }
}
