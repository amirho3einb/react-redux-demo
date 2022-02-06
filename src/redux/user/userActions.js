import axios from 'axios';
import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes';

// action creator

function fetchUsersRequest(){
    return {
        type: FETCH_USERS_REQUEST,
    }
}

function fetchUsersFailure(error){
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    };
}
function fetchUsersSuccess(users){
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    };
}



// async action creator

export const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest());
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            const users = res.data;
            dispatch(fetchUsersSuccess(users));
        })
        .catch((error) => {
            dispatch(fetchUsersFailure(error.message));
        });
    }
}

