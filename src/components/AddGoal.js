import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { firebaseApp } from '../firebase';
import Header from './Header';

class AddGoal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: ''
        }
    }

    componentWillMount() {
        firebaseApp.auth().onAuthStateChanged(user => {
            if(!user) {
                this.props.history.push('/');
            }
        })
    }

    addGoal() {
        //console.log('this', this);
        const { title } = this.state;
        const { desc } = this.state;
        const { email } = this.props.user;
        goalRef.push({email, title, desc});
    }

    render() {
        return (
          <div>
            <Header />
            <div className="form-inline">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Add a goal"
                        className="form-control"
                        style={{marginRight: '5px'}}
                        onChange={event => this.setState({title: event.target.value})}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        className="form-control"
                        style={{marginRight: '5px'}}
                        onChange={event => this.setState({desc: event.target.value})}
                    />
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={() => this.addGoal(this.props.history.push('/goallist'))}

                    >
                        Submit
                    </button>
                </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state;
    //console.log('state in AddGoal', state);
    return { user };
}

export default connect(mapStateToProps, null)(AddGoal);
