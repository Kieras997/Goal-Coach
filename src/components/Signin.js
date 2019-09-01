import React, { Component } from 'react';
import { firebaseApp } from '../firebase';
import { Link } from 'react-router-dom';
import Header from './Header';

class Signin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    componentWillMount() {
        firebaseApp.auth().onAuthStateChanged(user => {
            if(user) {
                this.props.history.push('/goallist');
            }
        })
    }

    signIn() {
        //console.log('this.state', this.state);
        const { email, password } = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            //console.log('error', error);
            this.setState({error});
        })
    }

    render() {
        return (
          <div>
            <Header />
            <div className="form-inline" style={{margin: '5%'}}>
                <h2>Sign In</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        style={{marginRight: '5px'}}
                        placeholder="email"
                        onChange={event => this.setState({ email: event.target.value})}
                    />
                    <input
                        className="form-control"
                        type="password"
                        placeholder="password"
                        onChange={event => this.setState({ password: event.target.value})}
                    />
                    <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => this.signIn()}
                    >
                        Sign In
                    </button>
                </div>
                <br />
                <Link to="/signup">Dont have account? Create one</Link>
                <div>{this.state.error.message}</div>
            </div>
            </div>
        );
    }
}

export default Signin;
