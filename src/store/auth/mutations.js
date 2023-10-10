
export const SET_STATE = (state, payload)  => {
    state.isAuthenticated = payload.isAuthenticated;
    state.userFirstName = payload.userFirstName;
    state.userEmail = payload.userEmail;
    state.userRole = payload.userRole;
}

export const LOGOUT = (state) => {
    state.isAuthenticated = false;
    state.userFirstName = '';
    state.userEmail ='';
    state.userRole = '';
}

