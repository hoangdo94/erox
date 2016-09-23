import { Meteor } from 'meteor/meteor';

Meteor.publish('users', () => Meteor.users.find());
Meteor.publish('userByEmail', (email) => {
  check(email, String);
  return Meteor.users.find({
    emails: {$elemMatch: {address: email}}
  });
});
