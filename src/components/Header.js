import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { firebaseApp } from '../firebase';

class Header extends Component {
   // renderLinks() {
   //     firebaseApp.auth().onAuthStateChanged(user => {
   //         if(user === true) {
   //             console.log('user', user);
   //             return (
   //                 <div>
   //                     <Link to="/addgoal">Add Goal </Link>
   //                     <Link to="/goallist">Goal List </Link>
   //                     <Link to="/signout">Sign Out</Link>
   //                 </div>
   //             );
   //         } else {
   //             return (
   //                 <div>
   //                     <Link to="/signin">Sign In </Link>
   //                     <Link to="/signup">Sign Up </Link>
   //                 </div>
   //             );
   //         }
   //     })
   // }

  render() {
      return (
        <div>
          <Link to="/app">App </Link>
          <Link to="/signin">Sign In </Link>
          <Link to="/signup">Sign Up </Link>
          <Link to="/addgoal">Add Goal </Link>
          <Link to="/goallist">Goal List </Link>
          <Link to="/signout">Sign Out</Link>
        </div>
      );
    }
  }

const mapStateToProps = (state) => {
    const { user } = state;
    return { user };
};

export default connect(mapStateToProps)(Header);
