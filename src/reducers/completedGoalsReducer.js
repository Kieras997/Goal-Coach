import { SET_COMPLETED } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case SET_COMPLETED:
            const { completedGoals } = action;
            return completedGoals;
        default:
            return state;
    }
}
