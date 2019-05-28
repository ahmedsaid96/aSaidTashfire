
import { all, takeLatest } from 'redux-saga/effects';
import { Action } from './Actoin';
import {markerSaga} from './Saga'

function* rootSaga() {
  yield all([
    // takeLatest(Action.getMarkers, markerSaga),

  ]);
}

export default rootSaga;
