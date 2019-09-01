import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import Header from './Header';

class Signout extends Component {
    componentDidMount() {
        firebaseApp.auth().signOut();
    }
    render() {
        return (
            <div>
              <Header />
              <p>See you later</p>
            </div>
        );
    }
}

export default Signout;
