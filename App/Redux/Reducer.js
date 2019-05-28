import { Action } from './Actoin';


export class Reducer {
    static INITIAL_STATE = {
        markers: [],
        
    };

    static reduce = (state = Reducer.INITIAL_STATE, action) => {
        console.log('TAG', 'action', action)
        switch (action.type) {
            case Action.SET_MARKERS:
                return { ...state, markers: action.data };

            default:
                return state;
        }
    };
}
