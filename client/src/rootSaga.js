import {takeLatest} from 'redux-saga/effects'

function* testSaga() {
	yield console.log('HERE');
}

function* rootSaga() {
	yield takeLatest('USER_FETCH_REQUESTED', testSaga);
}
  
export default rootSaga;