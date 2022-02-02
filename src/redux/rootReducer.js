import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
import IceCreamReducer from './iceCream/IceCreamReducer';


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer,
});
export default rootReducer;
