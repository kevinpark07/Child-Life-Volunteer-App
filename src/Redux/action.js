
const VOLUNTEER_URL = "http://localhost:3000/volunteers/";
const ADMINISTRATOR_URL = "http://localhost:3000/administrators/";
const INTERVIEW_URL = "http://localhost:3000/interviews/";
const MEETING_URL = "http://localhost:3000/meetings/";


export const loginUser = (user) => ({ type: "LOGIN_USER", payload: user });

export const getInterviews = () => {
    return function (dispatch) {
        fetch(INTERVIEW_URL)
        .then(resp => resp.json())
        .then(interviews => dispatch({type: "ADD_INTERVIEWS_FROM_FETCH", payload: interviews}))
    }
};

export const getVols = () => {
    return function (dispatch) {
        fetch(VOLUNTEER_URL)
        .then(resp => resp.json())
        .then(vols => dispatch({type: "ADD_VOLS_FROM_FETCH", payload: vols}))
    }
};

export const getAdmins = () => {
    return function (dispatch) {
        fetch(ADMINISTRATOR_URL)
        .then(resp => resp.json())
        .then(admins => dispatch({type: "ADD_ADMINS_FROM_FETCH", payload: admins}))
    }
};

export const getMeetings = () => {
    return function (dispatch) {
        fetch(MEETING_URL)
        .then(resp => resp.json())
        .then(meetings => dispatch({type: "ADD_MEETINGS_FROM_FETCH", payload: meetings}))
    }
};

export const newVol = (formData) => {
    return function (dispatch) {
        fetch(VOLUNTEER_URL, {
            method: "POST",
            headers: {
                accepts: "application/json"
            },
            body: formData
        })
        .then(resp => resp.json())
        .then(newVol => {
            dispatch({type: "ADD_NEW_VOLUNTEER", payload: newVol});
            dispatch({ type: "LOGIN_USER", payload: newVol });
        })
    }
};

export const newInterview = (interviewInfo) => {
    return function (dispatch) {
        fetch(INTERVIEW_URL, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(interviewInfo)
        }).then(resp => resp.json()).then(interview => dispatch({type: "ADD_NEW_INTERVIEW", payload: interview}))
    }
};

export const editInterview = (interview) => ({ type: "EDIT_INTERVIEW", payload: interview });

export const patchInterview = (interview, id) => {
    return function (dispatch) {
        fetch(INTERVIEW_URL + id, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(interview)
        })
        .then(resp => resp.json())
        .then(intObj => {
            dispatch({type: "PATCH_INTERVIEW", payload: intObj});
        })
    }
};

export const patchApproval = (approval, id) => {
    return function (dispatch) {
        fetch(VOLUNTEER_URL + id, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify({approved: approval})
        })
        .then(resp => resp.json())
        .then(volunteer => {
            dispatch({type: "APPROVE_VOLUNTEER", payload: volunteer});
        })
    }
}

export const signOutUser = () => ({ type: "SIGNOUT_USER" });

export const deleteVol = (id) => {
    return function (dispatch) {
        fetch(VOLUNTEER_URL + id, {
            method: "DELETE"
        })
        .then(resp => resp.json())
        .then(deletedVol => {
            dispatch({type: "REMOVE_VOLUNTEER", payload: deletedVol});
        })
    }
}

export const newMeeting = (meetingObj) => {
    return function (dispatch) {
        fetch(MEETING_URL, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(meetingObj)
        })
        .then(resp => resp.json())
        .then(newMeeting => {
            dispatch({type: "ADD_MEETING", payload: newMeeting});
        })
    }
}

export const addNotes = (meeting) => ({ type: "MEETING_NOTES", payload: meeting });

export const patchMeeting = (note, id) => {
    return function (dispatch) {
        fetch(MEETING_URL + id, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accepts: "application/json"
            },
            body: JSON.stringify(note)
        })
        .then(resp => resp.json())
        .then(meetObj => {
            dispatch({type: "PATCH_MEETING", payload: meetObj});
        })
    }
};

export const adminLogin = () => ({ type: "ADMIN_LOGIN" });


// data => {dispatch({type: "REMOVE_VOLUNTEER", payload: data});}

// export const editVol = (formData, id) => {
//     return function (dispatch) {
//         fetch(VOLUNTEER_URL + id, {
//             method: "PATCH",
//             headers: {
//                 accepts: "application/json"
//             },
//             body: formData
//         })
//         .then(resp => resp.json())
//         .then(newVol => {
//             dispatch({type: "EDIT_VOLUNTEER", payload: newVol});
//         })
//     }
// };

