import { SIGNED_IN, SET_GOALS, SET_COMPLETED, SHOW_GOAL } from './types';

export function logUser(email) {
    const action = {
        type: SIGNED_IN,
        email
    }
    return action;
}

export function setGoals(goals) {
    const action = {
        type: SET_GOALS,
        goals
    }
    return action;
}

export function setCompleted(completedGoals) {
    const action = {
        type: SET_COMPLETED,
        completedGoals
    }
    return action;
}

export function showGoal(desc) {
    const action = {
        type: SHOW_GOAL,
        desc
    }
}
