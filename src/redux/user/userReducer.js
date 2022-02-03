import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './userTypes';


// reducer : 

const initialState = {
    loading: false,
    data: [],
    error: "",
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
      case FETCH_USERS_REQUEST:
        return { ...state, loading: true };
    case FETCH_USERS_FAILURE:
        return { loading: false, error: action.payload, data: [] };
    case FETCH_USERS_SUCCESS:
        return { loading: false, error: "", data: action.payload };
      default:
        return state;
    }
}

export default userReducer;
