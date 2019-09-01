import { combineReducers } from 'redux';
import user from './userReducer';
import goals from './goalsReducer';
import completedGoals from './completedGoalsReducer';

export default combineReducers({
    user,
    goals,
    completedGoals
})