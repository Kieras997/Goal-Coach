import { SET_GOALS, SHOW_GOAL } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case SET_GOALS:
            const { goals } = action;
            return goals;
        case SHOW_GOAL:
            const { desc } = action;
            return desc;
        default:
            return state;
    }
}
