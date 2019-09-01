import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalRef } from '../firebase';
import { setGoals } from '../actions';
import GoalItem from './GoalItem';
import CompletedGoals from './CompletedGoals';
import Header from './Header';

class GoalList extends Component {
    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                //let goalObject = goal.val();
                const { email, title } = goal.val();
                //console.log('goalObject', goalObject);
                const serverKey = goal.key;
                goals.push({ email, title, serverKey });
                //console.log('goal', goal);
            })
            //console.log('goals', goals);
            this.props.setGoals(goals);
        })
    }

    render() {
        //console.log('this.props.goals', this.props.goals);
        return (
            <div>
              <Header />
                {
                    this.props.goals.map((goal, index) => {
                        return (
                            <GoalItem
                                key={index}
                                goal={goal}
                            />
                        )
                    })
                }
                <hr />
                <h4>Completed Goals</h4>
                <CompletedGoals />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { goals } = state;
    return { goals };
};

export default connect(mapStateToProps, { setGoals })(GoalList);
