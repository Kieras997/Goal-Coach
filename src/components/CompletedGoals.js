import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';
import { completeGoalRef } from '../firebase';

class CompletedGoals extends Component {
    componentDidMount() {
        completeGoalRef.on('value', snap => {
            let completedGoals = [];
            snap.forEach(completedGoal => {
                const { email, title } = completedGoal.val();
                completedGoals.push({email, title});
            })
            //console.log('completedGoals', completedGoals);
            this.props.setCompleted(completedGoals);
        })
    }
    
    clearCompleted() {
        completeGoalRef.set([]);
    }
    
    render() {
        return (
            //console.log('this.props.completedGoals', this.props.completedGoals);
            <div>
                {
                    this.props.completedGoals.map((completedGoal, index) => {
                        const { title, email } = completedGoal;
                        return (
                            <div key={index}>
                                <strong>{title}</strong> completed by <em>{email}</em>
                            </div>
                        )
                    })
                }
                <button
                    className="btn btn-primary"
                    onClick={() => this.clearCompleted()}
                >
                    Clear All
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { completedGoals } = state;
    return { completedGoals };
};

export default connect(mapStateToProps, { setCompleted })(CompletedGoals);
