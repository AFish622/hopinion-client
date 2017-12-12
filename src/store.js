import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { loadAuthToken } from './localStorage';
import displayReducer from './reducers/displayReducer';
import authReducer from './reducers/authReducer';
import {reducer as formReducer} from 'redux-form';
import protectedDataReducer from './reducers/protectedDataReducer';
import { setAuthToken } from './actions/authActions';


const store = createStore(
	combineReducers({
		form: formReducer,
  		display: displayReducer,
  		auth: authReducer,
  		protectedData: protectedDataReducer
	}),
    applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
}

export default store

