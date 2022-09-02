import { combineReducers, createStore } from 'redux';
import UserDataReducer from './UserData';
import CartReducer from './CartReducer';




const RootReducer = combineReducers({
    Cart: CartReducer,
    User: UserDataReducer,
});


export default createStore(RootReducer);