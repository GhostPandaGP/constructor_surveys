export function surveys(state = [], action) {
    switch (action.type) {
        case "SURVEYS_FETCH_DATA_SUCCESS":
            return action.surveys;
        default:
            return state;
    }
}