export const loginUser = (user) => ({ type: "LOGIN_USER", payload: user });

export const getInterviews = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/interviews")
        .then(resp => resp.json())
        .then(interviews => dispatch({type: "ADD_INTERVIEWS_FROM_FETCH", payload: interviews}))
    }
}

export const getVols = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/volunteers")
        .then(resp => resp.json())
        .then(vols => dispatch({type: "ADD_VOLS_FROM_FETCH", payload: vols}))
    }
}

export const getAdmins = () => {
    return function (dispatch) {
        fetch("http://localhost:3000/administrators")
        .then(resp => resp.json())
        .then(admins => dispatch({type: "ADD_ADMINS_FROM_FETCH", payload: admins}))
    }
}

export const newVol = (formData) => {
    return function (dispatch) {
        fetch("http://localhost:3000/volunteers", {
            method: "POST",
            // headers: {
            //     "content-type": "multipart/form-data",
            //     accepts: "application/json"
            // },
            body: formData
        })
        .then(resp => resp.json())
        .then(console.log)
    }
}

// interviews => dispatch({type: "ADD_INTERVIEWS_FROM_FETCH", payload: interviews})