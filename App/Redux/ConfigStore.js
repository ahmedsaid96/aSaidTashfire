import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import rootSaga from './rootSaga';

import {Reducer} from './Reducer';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    Reducer.reduce,
    applyMiddleware(sagaMiddleware)
  );
  sagaMiddleware.run(rootSaga);
  return { store };
};

export default configureStore();
