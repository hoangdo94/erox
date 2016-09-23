import React from 'react';
import { browserHistory } from 'react-router';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';

const handleLogout = () => Meteor.logout(() => browserHistory.push('/login'));

const userName = () => {
  const user = Meteor.user();
  const profile = user && user.profile ? user.profile : '';
  return profile ? `${profile.firstName} ${profile.lastName}` : '';
};

const profileLink = () => {
  return `/profile/${ Meteor.user().emails[0].address }`;
};

export const AuthenticatedNavigation = () => (
  <div>
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem eventKey={ 1 } href="/">Index</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/documents">
        <NavItem eventKey={ 2 } href="/documents">Documents</NavItem>
      </LinkContainer>
    </Nav>
    <Nav pullRight>
      <NavDropdown eventKey={ 3 } title={ userName() } id="basic-nav-dropdown">
        <LinkContainer to={ profileLink() } >
          <MenuItem eventKey={ 3.1 } href={ profileLink() }>Profile</MenuItem>
        </LinkContainer>
        <MenuItem divider/>
        <MenuItem eventKey={ 3.2 } onClick={ handleLogout }>Logout</MenuItem>
      </NavDropdown>
    </Nav>
  </div>
);
