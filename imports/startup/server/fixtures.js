import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
  if (options.profile)
    user.profile = options.profile;
  if (options.inventory)
    user.inventory = options.inventory;
  return user;
});

const users = [{
  email: 'hoangdo.dh94@gmail.com',
  password: '123123123',
  profile: {
    firstName: 'Hoang',
    lastName: 'Do'
  },
  inventory: {
    cash: 1000000
  },
  roles: ['admin']
}];

users.forEach(({ email, password, profile, inventory, roles }) => {
  const userExists = Meteor.users.findOne({ 'emails.address': email });

  if (!userExists) {
    const userId = Accounts.createUser({ email, password, profile, inventory });
    Roles.addUsersToRoles(userId, roles);
  }
});
