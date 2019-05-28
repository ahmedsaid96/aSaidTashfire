export class Action {

    static SET_MARKERS = 'SET_MARKERS'
    static setMarkers = (data) => {
        return {
            type: Action.SET_MARKERS,
            data
        };
    }

}