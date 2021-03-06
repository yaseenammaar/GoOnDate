import authConstants from "../constants/authConstants";

export const setUser = data => (
    {
        type: authConstants.SET_USER,
        payload: data,
    }
);

export const setIsNewUser = data => (
    {
        type: authConstants.SET_IS_NEW_USER,
        payload: data,
    }
);

export const resetAuthData = data => (
    {
        type: authConstants.RESET_AUTH_DATA_STATE,
        payload: data,
    }
);

export const makeTakeProfileDataTrue = () => (
    {
        type: authConstants.SET_TAKE_PROFILE_DATA_TRUE,
        payload: {}
    }
)

export const makeTakeProfileDataFalse = () => (
    {
        type: authConstants.SET_TAKE_PROFILE_DATA_FALSE,
        payload: {}
    }
)
