import { composeWithTracker } from 'react-komposer';
import { Loading } from '../components/loading.js';
import { Meteor } from 'meteor/meteor';
import { Profile } from '../components/profile';

const composer = (params, onData) => {
  const subscription = Meteor.subscribe('userByEmail', params.email);
  if (subscription.ready()) {
    const user = Meteor.users.findOne({
      emails: {$elemMatch: {address: params.email}}
    });
    onData(null, { user });
  }
};

export default composeWithTracker(composer, Loading)(Profile);
