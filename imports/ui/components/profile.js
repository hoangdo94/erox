import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Bert } from 'meteor/themeteorchef:bert';

export const Profile = ({ user }) => (
  <div>
    <p>{ user.profile.firstName }</p>
    <p>{ user.profile.lastName }</p>
    <p>{ user.inventory.cash }</p>
  </div>
);

Profile.propTypes = {
  users: React.PropTypes.array,
};
