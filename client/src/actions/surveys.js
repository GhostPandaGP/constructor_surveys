export function surveysFetchDataSuccess(surveys) {
    return {
        type: "SURVEYS_FETCH_DATA_SUCCESS",
        surveys
    }
}

export function surveysFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then( response => {
                if(!response.ok) {
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json() )
            .then(surveys => dispatch(surveysFetchDataSuccess(surveys)))
    }
}