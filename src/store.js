import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import { setAuthToken } from './actions/authActions';

import { loadAuthToken } from './localStorage';
import protectedDataReducer from './reducers/protectedDataReducer';
import mapReducer from './reducers/mapReducer';
import displayReducer from './reducers/displayReducer';
import authReducer from './reducers/authReducer';
import hopinionReducer from './reducers/hopinionReducer';



const store = createStore(
	combineReducers({
		  form: formReducer,
  		display: displayReducer,
  		auth: authReducer,
  		protectedData: protectedDataReducer,
  		map: mapReducer,
      hopinion: hopinionReducer
	}),
    applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
}

export default store

