import axios from 'axios';
import {takeEvery,call,put} from "redux-saga/effects"
import { GET_USERS } from '../reducer/action'

export function* watchGetUsers(){
    yield takeEvery(GET_USERS,workerGetUsers)

}
export function* workerGetUsers(){
    const uri="http://jsonplaceholder.typicode.com/users"
    const result=yield call(axios.get,uri)
    yield put({type: SET_USERS, value: result.data})


}