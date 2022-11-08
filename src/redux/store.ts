
import { Dispatch } from 'react';
import { legacy_createStore as createStore, applyMiddleware, Store, EmptyObject } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middlewares = [thunk];
const store: Store<EmptyObject & { main: MatrixState; }, MatrixAction> & { dispatch: Dispatch<MatrixAction> & DispatchType; } = createStore(
   rootReducer,
   applyMiddleware(...middlewares)
);

export default store;